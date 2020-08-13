// Add Schedule Item
document.querySelector("#add-time").
  addEventListener('click', cloneField)

function cloneField() {
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  const addClassOn = newFieldContainer.querySelectorAll('.close')
  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function (field) {
    field.value = ""
  })

  addClassOn.forEach(function (on) {
    on.classList.add('on')
  })
  document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

// Remove Schedule Item
function removeItem(){
  const contScheduleItem = document.querySelectorAll('.schedule-item').length
  if (contScheduleItem > 1) {
    this.closest('.schedule-item').remove();
  } 
}

document.getElementById('schedule-items').addEventListener('click', function(e) {
  for (let target = e.target; target && target != this; target = target.parentNode) {
      if (target.matches('.close')) {
          removeItem.call(target, e);
          break;
      }
  }
}, false);