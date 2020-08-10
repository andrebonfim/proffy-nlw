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
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

// ====Função para transformar dados em "String" => Recebe um número e retorna uma string de subjects
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1 // Garante que é número com o "+" e diminui 1 para igualar com o array que começa com 0
  return subjects[position]
}

// Converter horas em minutos
function convertHoursToMinutes(time) {
  const [ hour, minutes ] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}