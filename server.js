const express = require("express");
const path = require("path");
const controllerRouterCategory = require("./src/routes/categoryRoutes");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.get("/category", controllerRouterCategory);

/*
alterei esse endpoint acima para /category e parei 
de fazer o req, res, da primeira rota para o meu controllerRouterCategory
*/

//iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
