//area do horario
const hora = document.querySelector('#horario')
//svg do sol
let solsvg = document.querySelector('.sol')

//funcoes de horas datas e tals
let date = new Date()
let today = date.getHours()
hora.innerHTML = today
if (today > 0) {
  hora.innerHTML = today + 'hr'
}

//position do solsvg
if (today == 14) {
  solsvg.style.left = '12px'
  solsvg.style.bottom = '55px'
}
