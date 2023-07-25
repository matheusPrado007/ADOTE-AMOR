const express = require("express");
const cors = require('cors')
const app = express();
require("./db");

const routes = require("./routes");
require("dotenv").config();


app.use(cors({origin: '*'}));

app.use("/upload", routes);


const port = process.env.PORT || 3333;


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
