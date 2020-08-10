// ====Inicia a config do server e adds====
const express = require('express');
const server = express(); // Express já em exec. retornando objeto
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages') // Páginas


const nunjucks = require('nunjucks');
// ====Configuração do Nunjucks====
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
// ====Receber os dados do req.body====
.use(express.urlencoded({ extended: true }))
// ====Busca as páginas de CSS e Javascript como também imagens...====
.use(express.static("public"))
// ====Rotas====
.get("/", pageLanding) // ..., (req, res) => {})
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// ====Configuração da porta do server====
.listen(5000);

