import { useDispatch, useSelector } from "react-redux";
import { setKey, tutorialSelector, unlockStep } from "../../../../redux";
import { ExtensionProvider } from "@terradharitri/sdk-extension-provider";
import { Address, SignableMessage } from "@terradharitri/sdk-core";
import { signMessageSample } from "../codeExamples";
import { TutorialCard } from "../../../../components/TutorialCard";

export const Step3 = () => {
  const {
    tutorialData: { signedMessage, address: stateAddress },
  } = useSelector(tutorialSelector);
  const dispatch = useDispatch();

  const signMessage = async () => {
    const provider = ExtensionProvider.getInstance();
    if (stateAddress) {
      await provider.init();
      provider.setAddress(stateAddress);
    }

    const address = await provider.getAddress();
    const message = new SignableMessage({
      message: Buffer.from("hello"),
      address: new Address(address),
    });
    await provider.signMessage(message);
    const signedMessage = JSON.stringify(message.toJSON(), null, 4);

    dispatch(
      setKey({
        key: "signedMessage",
        value: signedMessage,
      })
    );

    dispatch(unlockStep());
  };

  return (
    <>
      <TutorialCard
        title="Prepare and sign message"
        codeSample={signMessageSample}
        outputResult={
          signedMessage ? `signedMessage = ${signedMessage}` : undefined
        }
        actionButtonHandler={signMessage}
      />
    </>
  );
};
