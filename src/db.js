const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL
  )
  console.log("Conectado com sucesso!");
}

module.exports = main;