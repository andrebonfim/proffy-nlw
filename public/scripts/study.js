const hideForm = document.querySelector('#wrapper')
hideForm.style.display = 'none'

function toggle(ele) {
  const cont = document.getElementById('wrapper')
  if (cont.style.display == 'none') {
      cont.style.display = 'block'

      document.getElementById(ele.id).value = 'Filtrar por dia, hora e matéria'
  }
  else {
      cont.style.display = 'none';
      document.getElementById(ele.id).value = 'Filtrar por dia, hora e matéria'
  }
}