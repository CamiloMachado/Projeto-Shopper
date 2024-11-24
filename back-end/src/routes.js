const express = require("express");
const routes = express.Router();

// Importe das controllers para ser feito a comunicação com o banco através das rotas
const estimateController = require ("./controllers/estimateController");
const confirmController = require("./controllers/confirmController")

//Rotas
routes.get("/",);
routes.post("/ride/estimate", estimateController.post);
routes.get("/ride/{customer_id}?driver_id={id do motorista}",);
routes.patch("/ride/confirme", confirmController.insert);

module.exports = routes;