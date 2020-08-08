const Database = require('./database/db')
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

// ====Funcionalidades====

// ====Função para buscar e apresentar as páginas no navegador====
function pageLanding(req, res) {
  return res.render("index.html")
}
async function pageStudy(req, res) {
  const filters = req.query // Pega os dados e devolve tudo que está recebendo

  if(!filters.subject || !filters.weekday || !filters.time) { // Se campos vazios
    return res.render("study.html", { filters, subjects, weekdays })
  }

  // Converter horas em minutos
  const timeToMinutes = convertHoursToMinutes(filters.time)

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = classes.id
      AND class_schedule.weekday = ${filters.weekday}
      AND class_schedule.time_from <= ${timeToMinutes}
      AND class_schedule.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filters.subject}'
    `

    // Caso haja erro na hora da consulta do banco de dados
    try {
      const db = await Database 
      const proffys = await db.all(query) 

      return res.render('study.html', { proffys, subjects, filters, weekdays })

    } catch (error) {
      console.log(error)
    }
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
  return res.render("give-classes.html", { dados, weekdays, subjects })
}

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses
}