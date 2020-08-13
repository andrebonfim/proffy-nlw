// Pegar o botão
document.querySelector("#add-time").
  // Quando clicar no botão
  addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
  //Duplicar os campos
  // Qual campo?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  const addClassOn = newFieldContainer.querySelectorAll('.close')

  // Pegar os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll('input')

  // Para cada campo, limpar:
  fields.forEach(function (field) {
    // Pegar o field do momento e limpa
    field.value = ""
  })

  addClassOn.forEach(function (on) {
    // Pegar o field do momento e limpa
    on.classList.add('on')
  })

  // Colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

