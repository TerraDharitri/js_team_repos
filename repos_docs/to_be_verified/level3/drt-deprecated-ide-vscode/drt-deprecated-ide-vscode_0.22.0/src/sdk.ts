import axios from "axios";
import { ConfigurationTarget, InputBoxOptions, Terminal, Uri, window, workspace } from 'vscode';
import { Environment } from './environment';
import { Feedback } from './feedback';
import * as presenter from './presenter';
import { Settings } from './settings';
import * as storage from "./storage";
import { ProcessFacade, sleep } from "./utils";
import { FreeTextVersion, Version } from './version';
import path = require("path");
import fs = require('fs');

const DefaultDrtpyVersion = Version.parse("9.4.1");
const LatestDrtpyReleaseUrl = "https://api.github.com/repos/TerraDharitri/drt-py-sdk-cli/releases/latest";

export function getPath() {
    return Settings.getSdkPath();
}

function getDrtpyPath() {
    // If drtpy is installed using pipx or drtpy-up, it should be in the PATH.
    // If drtpy is installed using the extension, it's in ~/dharitri-sdk, which is also added to the PATH - see "environment.ts".
    return "drtpy";
}

function getPrettyPrinterPath() {
    return path.join(getPath(), "dharitri_sc_lldb_pretty_printers.py");
}

export async function reinstall() {
    let latestVersion = await getLatestKnownDrtpyVersion();
    let version = await presenter.askDrtpyVersion(latestVersion);
    if (!version) {
        return;
    }

    await reinstallDrtpy(version);
}

/** 
 * Fetch the latest known version from Github, or fallback to the IDE-configured default version, if the fetch fails.
 */
async function getLatestKnownDrtpyVersion(): Promise<Version> {
    try {
        let response = await axios.get(LatestDrtpyReleaseUrl);
        return Version.parse(response.data.tag_name);
    } catch {
        return DefaultDrtpyVersion;
    }
}

export async function ensureInstalled() {
    await ensureDrtpy();
}

async function ensureDrtpy() {
    let isEdpyInstalled = await isDrtpyInstalled();
    if (isEdpyInstalled) {
        return;
    }

    let latestDrtpyVersion = await getLatestKnownDrtpyVersion();
    let answer = await presenter.askInstallDrtpy(latestDrtpyVersion);
    if (answer) {
        await reinstallDrtpy(latestDrtpyVersion);
    }
}

async function isDrtpyInstalled(exactVersion?: Version): Promise<boolean> {
    let [cliVersionString, ok] = await getOneLineStdout(getDrtpyPath(), ["--version"]);
    if (!cliVersionString || !ok) {
        return false;
    }

    let installedVersion = Version.parse(cliVersionString);

    if (exactVersion) {
        return installedVersion.isSameAs(exactVersion);
    }

    // No exact version specified (desired).
    let latestKnownVersion = await getLatestKnownDrtpyVersion();
    return installedVersion.isNewerOrSameAs(latestKnownVersion);
}

async function getOneLineStdout(program: string, args: string[]): Promise<[string, boolean]> {
    try {
        let result = await ProcessFacade.execute({
            program: program,
            args: args
        });

        return [result.stdout, true];
    } catch (e) {
        return ["", false];
    }
}

export async function reinstallDrtpy(version: Version) {
    const drtpyUp = storage.getPathTo("drtpy-up.py");
    const drtpyUpUrl = getDrtpyUpUrl(version);
    await downloadFile(drtpyUp, drtpyUpUrl);

    const drtpyUpCommand = `python3 "${drtpyUp}" --exact-version=${version.value} --not-interactive`;

    await runInTerminal("installer", drtpyUpCommand);

    Feedback.info({
        message: "drtpy installation has been started. Please wait for installation to finish.",
        display: true
    });

    do {
        Feedback.debug({
            message: "Waiting for the installer to finish."
        });
        await sleep(5000);
    } while ((!await isDrtpyInstalled(version)));

    await Feedback.info({
        message: "drtpy has been installed. Please close all Visual Studio Code terminals and then reopen them (as needed).",
        display: true,
        modal: true
    });
}

function getDrtpyUpUrl(version: Version) {
    return `https://raw.githubusercontent.com/dharitri/drt-py-sdk-cli/${version.vValue}/drtpy-up.py`;
}

export async function newFromTemplate(folder: string, template: string, name: string) {
    try {
        await ProcessFacade.execute({
            program: getDrtpyPath(),
            args: ["contract", "new", "--path", folder, "--template", template, "--name", name],
        });

        Feedback.info({
            message: `Smart Contract [${name}] created, based on template [${template}].`,
            display: true
        });
    } catch (error: any) {
        throw new Error("Could not create Smart Contract", { cause: error });
    }
}

async function runInTerminal(terminalName: string, command: string, env: any = null, cwd: string = "") {
    if (!env) {
        env = Environment.getForTerminal();
    }

    let terminal = await getOrCreateTerminal(terminalName, env, cwd);
    terminal.sendText(command);
    terminal.show(false);
}

async function getOrCreateTerminal(name: string, env: any, cwd: string) {
    let terminal = findTerminal(name);
    if (!terminal) {
        terminal = window.createTerminal({ name: patchTerminalName(name), env: env, cwd: cwd });
    }

    return terminal;
}

function findTerminal(name: string): Terminal {
    let terminal = window.terminals.find(item => item.name == patchTerminalName(name));
    return terminal;
}

function patchTerminalName(name: string): string {
    return `DharitrI: ${name}`;
}

async function destroyTerminal(name: string) {
    let terminal = findTerminal(name);
    if (!terminal) {
        return;
    }

    terminal.hide();
    terminal.dispose();
    await sleep(500);
}

async function killRunningInTerminal(name: string) {
    let terminal = findTerminal(name);
    if (!terminal) {
        return;
    }

    terminal.sendText("\u0003");
}

export async function ensureInstalledBuildchains(languages: string[]) {
    for (let i = 0; i < languages.length; i++) {
        await ensureInstalledDrtpyGroup(languages[i]);
    }
}

async function ensureInstalledDrtpyGroup(group: string) {
    if (await isDrtpyGroupInstalled(group)) {
        return;
    }

    let answer = await presenter.askInstallDrtpyGroup(group);
    if (answer) {
        await reinstallDrtpyGroup(group, FreeTextVersion.unspecified());
    }
}

async function isDrtpyGroupInstalled(group: string): Promise<boolean> {
    let [_, ok] = await getOneLineStdout(getDrtpyPath(), ["deps", "check", group]);
    return ok;
}

export async function reinstallModule(): Promise<void> {
    let module = await presenter.askChooseSdkModule(["vmtools", "rust"]);
    if (!module) {
        return;
    }

    let version = await presenter.askModuleVersion();
    if (!version) {
        return;
    }

    await reinstallDrtpyGroup(module, version);
}

async function reinstallDrtpyGroup(group: string, version: FreeTextVersion) {
    Feedback.info({
        message: `Installation of ${group} has been started. Please wait for installation to finish.`,
        display: true
    });

    let tagArgument = version.isSpecified() ? `--tag=${version}` : "";
    await runInTerminal("installer", `${getDrtpyPath()} --verbose deps install ${group} --overwrite ${tagArgument}`);

    do {
        Feedback.debug({
            message: "Waiting for the installer to finish."
        });

        await sleep(5000);
    } while ((!await isDrtpyGroupInstalled(group)));

    await Feedback.info({
        message: `${group} has been installed.`,
        display: true,
        modal: true
    });
}

export async function buildContract(folder: string) {
    try {
        await runInTerminal("build", `${getDrtpyPath()} contract build --path "${folder}"`);
    } catch (error: any) {
        throw new Error("Could not build Smart Contract", { cause: error });
    }
}

export async function cleanContract(folder: string) {
    try {
        await runInTerminal("build", `${getDrtpyPath()} --verbose contract clean --path "${folder}"`);
    } catch (error: any) {
        throw new Error("Could not clean Smart Contract", { cause: error });
    }
}

export async function runScenarios(folder: string) {
    try {
        await ensureInstalledDrtpyGroup("vmtools");
        await runInTerminal("scenarios", `run-scenarios "${folder}"`);
    } catch (error: any) {
        throw new Error("Could not run scenarios.", { cause: error });
    }
}

export async function runFreshLocalnet(localnetToml: Uri) {
    try {
        let folder = path.dirname(localnetToml.fsPath);

        await ensureInstalledDrtpyGroup("golang");
        await destroyTerminal("localnet");
        await runInTerminal("localnet", `${getDrtpyPath()} localnet setup`, null, folder);
        await runInTerminal("localnet", `${getDrtpyPath()} localnet start`);
    } catch (error: any) {
        throw new Error("Could not start localnet.", { cause: error });
    }
}

export async function resumeExistingLocalnet(localnetToml: Uri) {
    try {
        let folder = path.dirname(localnetToml.fsPath);

        await destroyTerminal("localnet");
        await runInTerminal("localnet", `${getDrtpyPath()} localnet start`, null, folder);
    } catch (error: any) {
        throw Error("Could not start localnet.", { cause: error });
    }
}

export async function stopLocalnet(_localnetToml: Uri) {
    try {
        await killRunningInTerminal("localnet");
    } catch (error: any) {
        throw new Error("Could not start localnet.", { cause: error });
    }
}

export async function installRustDebuggerPrettyPrinterScript() {
    let repository = await showInputBoxWithDefault({
        title: "Github repository",
        prompt: "The github repository containing the rust debugger pretty printer script.",
        defaultInput: "dharitri/drt-sdk-rs",
        ignoreFocusOut: true,
    });
    let branch = await showInputBoxWithDefault({
        title: "Branch",
        prompt: "The branch to use.",
        defaultInput: "master",
        ignoreFocusOut: true,
    });
    let inputPath = await showInputBoxWithDefault({
        title: "File path",
        prompt: "File path to the pretty printer script.",
        defaultInput: "tools/rust-debugger/pretty-printers/dharitri_sc_lldb_pretty_printers.py",
        ignoreFocusOut: true,
    });

    let url = `https://raw.githubusercontent.com/${repository}/${branch}/${inputPath}`;
    let prettyPrinterPath = getPrettyPrinterPath();
    await downloadFile(prettyPrinterPath, url);

    let lldbConfig = workspace.getConfiguration("lldb");
    let commands = [`command script import ${prettyPrinterPath}`];
    await lldbConfig.update("launch.initCommands", commands, ConfigurationTarget.Global);

    await Feedback.info({
        message: "The rust debugger pretty printer script has been installed.",
        display: true,
        modal: true
    });
}

async function showInputBoxWithDefault(options: InputBoxOptions & { defaultInput: string }) {
    let input = await window.showInputBox({
        ...options,
        prompt: `${options.prompt} Leave empty to accept the default.`,
        placeHolder: `Default: ${options.defaultInput}`
    });
    if (input) {
        return input;
    }
    return options.defaultInput;
}

async function downloadFile(path: fs.PathLike, url: string) {
    let fileData = await downloadRawData(url);
    fs.writeFileSync(path, fileData);

    Feedback.debug({
        message: `Downloaded file from ${url} to ${path}.`
    });
}

async function downloadRawData(url: string): Promise<string> {
    try {
        let response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to download ${url}\n${error}`);
    }
}
