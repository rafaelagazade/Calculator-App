;(() => {
  let screen = document.querySelector('.calculator form .screen')
  let buttons = document.querySelectorAll('.calculator .buttons .btn')
  let clear = document.querySelector('.calculator .buttons .btn-clear')
  let equal = document.querySelector('.calculator .buttons .btn-equal')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let value = e.target.dataset.num
      screen.value += value
    })
  })
  equal.addEventListener('click', () => {
    if (screen.value === '') {
      screen.value = 'Please enter'
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  clear.addEventListener('click', () => {
    screen.value = '';
  })
})()
