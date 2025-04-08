import { UserPublicKey, UserSecretKey } from "./userKeys";
import { EncryptedData, Encryptor, Decryptor, CipherAlgorithm, Version, KeyDerivationFunction, Randomness } from "./crypto";
import { ScryptKeyDerivationParams } from "./crypto/derivationParams";

export class UserWallet {
    private readonly publicKey: UserPublicKey;
    private readonly encryptedData: EncryptedData;

    
    constructor(secretKey: UserSecretKey, password: string, randomness: Randomness = new Randomness()) {
        const text = Buffer.concat([secretKey.valueOf(), secretKey.generatePublicKey().valueOf()]);
        this.encryptedData = Encryptor.encrypt(text, password, randomness);
        this.publicKey = secretKey.generatePublicKey();
    }

    
    static decryptSecretKey(keyFileObject: any, password: string): UserSecretKey {
        const encryptedData = UserWallet.edFromJSON(keyFileObject);

        let text = Decryptor.decrypt(encryptedData, password);
        while (text.length < 32) {
            let zeroPadding = Buffer.from([0x00]);
            text = Buffer.concat([zeroPadding, text]);
        }

        let seed = text.slice(0, 32);
        return new UserSecretKey(seed);
    }

    static edFromJSON(keyfileObject: any): EncryptedData {
        return new EncryptedData({
            version: Version,
            id: keyfileObject.id,
            cipher: keyfileObject.crypto.cipher,
            ciphertext: keyfileObject.crypto.ciphertext,
            iv: keyfileObject.crypto.cipherparams.iv,
            kdf: keyfileObject.crypto.kdf,
            kdfparams: new ScryptKeyDerivationParams(
              keyfileObject.crypto.kdfparams.n,
              keyfileObject.crypto.kdfparams.r,
              keyfileObject.crypto.kdfparams.p,
              keyfileObject.crypto.kdfparams.dklen
            ),
            salt: keyfileObject.crypto.kdfparams.salt,
            mac: keyfileObject.crypto.mac,
        });
    }

    /**
     * Converts the encrypted keyfile to plain JavaScript object.
     */
    toJSON(): any {
        return {
            version: Version,
            id: this.encryptedData.id,
            address: this.publicKey.hex(),
            bech32: this.publicKey.toAddress().toString(),
            crypto: {
                ciphertext: this.encryptedData.ciphertext,
                cipherparams: { iv: this.encryptedData.iv },
                cipher: CipherAlgorithm,
                kdf: KeyDerivationFunction,
                kdfparams: {
                    dklen: this.encryptedData.kdfparams.dklen,
                    salt: this.encryptedData.salt,
                    n: this.encryptedData.kdfparams.n,
                    r: this.encryptedData.kdfparams.r,
                    p: this.encryptedData.kdfparams.p
                },
                mac: this.encryptedData.mac,
            }
        };
    }
}
