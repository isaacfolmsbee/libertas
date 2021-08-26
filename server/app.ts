// import express, { Application } from 'express';
// const app: Application = express();

// const port: any = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on port: ${port}`));


//let message = "super secret! even more secret";

//let key = forge.random.getBytesSync(32);

//let encrypted = AES.encrypt(message, "big_password");

//console.log(encrypted.toString());

//console.log(AES.decrypt(encrypted.toString(), "big_password").toString(CryptoJS.enc.Utf8));

// let encrypted = keypair.publicKey.encrypt("Secret Message");

// console.log(encrypted);

// console.log("that was the encrypted message!");

// let decrypted = keypair.privateKey.decrypt(encrypted);

// console.log(JSON.stringify(keypair.publicKey));

import bcrypt from 'bcrypt';
import forge from 'node-forge';
import CryptoJS, { AES } from 'crypto-js';

const bSalt: string = bcrypt.genSaltSync(10);

let rsa = forge.pki.rsa;
let keypair = rsa.generateKeyPair({bits: 1024, e: 0x10001});

let credential = {
	username: "Jeetro",
	passphrase: bcrypt.hashSync("password", bSalt),
    rsaPublic: JSON.stringify(keypair.publicKey),
    rsaPrivate: AES.encrypt(JSON.stringify(keypair.privateKey), "password").toString(),
	accountReference: AES.encrypt("553486125ed592a10c4e8e6b", "password").toString(),
	requestReferences: [
		keypair.publicKey.encrypt("55348611a56c10449ab80a4f").toString(),
	],
}

console.log(credential);