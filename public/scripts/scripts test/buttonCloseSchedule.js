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