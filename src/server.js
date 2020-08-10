// ====Inicia a config do server e adds====
const express = require('express')
const server = express() // Express já em exec. retornando objeto
const nunjucks = require('nunjucks')

// ====Busca as páginas de CSS e Javascript como também imagens...====
server.use(express.static("public"))

// ====Páginas====
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// ====Rotas====
server
.get("/", pageLanding) // ..., (req, res) => {})
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// ====Receber os dados do req.body====
.use(express.urlencoded({ extended: true }))

// ====Configuração do Nunjucks====
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// ====Configuração da porta do server====
server.listen(5000)

