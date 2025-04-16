# drt-js-sdk-wallet-cli

## Overview

**sdk-wallet-cli** is a light CLI wrapper over [@terradharitri/sdk-wallet](https://www.npmjs.com/package/@terradharitri/sdk-wallet) and allows one to generate mnemonics, derive key files and sign DharitrI transactions.
It exposes the following **commands**, via the `drtjs-wallet` alias:


```
$ drtjs-wallet --help
Usage: drtjs-wallet [options] [command]

Options:
  -V, --version           output the version number
  -h, --help              display help for command

Commands:
  new-mnemonic [options]  Create a new mnemonic phrase (24 words)
  derive-key [options]    Derive a JSON key-file from an existing mnemonic
                          phrase
  sign [options]          Sign a JSON transaction
  help [command]          display help for command

```
### New Mnemonic


```
$ drtjs-wallet new-mnemonic --help
Usage: drtjs-wallet new-mnemonic [options]

Create a new mnemonic phrase (24 words)

Options:
  -m, --mnemonic-file <mnemonicFile>  where to save the mnemonic
  -h, --help                          display help for command

```


### Derive Key File


```
$ drtjs-wallet derive-key --help
Usage: drtjs-wallet derive-key [options]

Derive a JSON key-file from an existing mnemonic phrase

Options:
  -m, --mnemonic-file <mnemonicFile>  a file containing the mnemonic
  -n, --account-index <accountIndex>  the account index to derive (default:
                                      "0")
  -k, --key-file <keyFile>            the key-file to create
  -p, --password-file <passwordFile>  a file containing the password for the
                                      key-file
  -h, --help                          display help for command

```


### Sign


```
$ drtjs-wallet sign --help
Usage: drtjs-wallet sign [options]

Sign a JSON transaction

Options:
  -i, --in-file <inFile>              the file containing the JSON transaction
  -o, --out-file <outFile>            where to save the signed JSON transaction
  -k, --key-file <keyFile>            the key-file (the wallet)
  -p, --password-file <passwordFile>  the file containing the key-file password
  -h, --help                          display help for command

```


