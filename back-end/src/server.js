const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");

// Configura para o uso das rotas HTTP.
const app = express();
// configura o cors para comunicação entre o front e o back.
app.use(cors());
// Configura para receber os dados de .env
dotenv.config();
// Configura o body-parser para processar JSON
app.use(bodyParser.json());
// Configura o body-parser para processar dados URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.port || 8080, () => {
    console.log(`Example app listening on port ${process.env.port || 8080}`);
})