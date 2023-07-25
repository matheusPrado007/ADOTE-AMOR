const admin = require("firebase-admin");
const serviceAccount = require("../config/api-adote-com-amor-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://api-adote-com-amor.appspot.com", // Substitua pelo nome do seu bucket de armazenamento
});

const bucket = admin.storage().bucket();

module.exports = bucket;
