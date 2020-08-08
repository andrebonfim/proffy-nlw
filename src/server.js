const proffys = [
  { 
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "9999999999", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [180], 
    time_to: [420] 
  },
  { 
    name: "Mayk Brito", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "9999999999", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "40", 
    weekday: [2], 
    time_from: [890], 
    time_to: [970] 
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

// ====Inicia a config do server e adds====
const express = require('express')
const server = express() // Express já em exec. retornando objeto
const nunjucks = require('nunjucks')

// ====Busca as páginas de CSS e Javascript como também imagens...====
server.use(express.static("public"))

// ====Funcionalidades====

// ====Função para transformar dados em "String" => Recebe um número e retorna uma string de subjects
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1 // Garante que é número com o "+" e diminui 1 para igualar com o array que começa com 0
  return subjects[position]
}

// ====Função para buscar e apresentar as páginas no navegador====
function pageLanding(req, res) {
  return res.render("index.html")
}
function pageStudy(req, res) {
  const filters = req.query // Pega os dados e devolve tudo que está recebendo
  return res.render("study.html", {proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
  const data = req.query 
  const isNotEmpty = Object.keys(data).length > 0 // Verifica se tem dados
  
  // Se tiver dados
  if (isNotEmpty) {

    // Pega o subject do dado que está recebendo que neste momento é um número e envia para a função getSubject que retorna o valor em formato de String
    data.subject = getSubject(data.subject)
    // Adicionar dados a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  // Se não, mostrar a página
  return res.render("give-classes.html", {dados, weekdays, subjects})
}

// Rotas
server
.get("/", pageLanding) // ..., (req, res) => {})
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Configuração do Nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Configuração da porta do server
server.listen(5000)

