import { SignableMessage } from "@terradharitri/sdk-core/out";
import { SignMessageParams } from "./types/snapParam";
import { panel, text, copyable, heading, divider } from "@metamask/snaps-sdk";
import { KeyOps } from "./operations/KeyOps";

/**
 * @param messageParam - The message to sign.
 */
export const signMessage = async (
  messageParam: SignMessageParams
): Promise<string> => {
  const keyOps = new KeyOps();

  const signableMessage = new SignableMessage({
    message: Buffer.from(messageParam.message, "ascii"),
  });

  const confirmationResponse = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Message signing"),
        divider(),
        text("Message"),
        copyable(messageParam.message),
      ]),
    },
  });

  if (confirmationResponse !== true) {
    throw new Error("Message must be signed by the user");
  }

  const serializedMessage = signableMessage.serializeForSigning();

  return keyOps.getMessageSignature(serializedMessage);
};
