const express = require("express") //chama o express
const app = express() //executa o express

const filmes = require("./routes/filmesRoutes") //chamando todas as rotas

app.use("/filmes", filmes) //colocando a rota raiz

module.exports = app //exportando o app