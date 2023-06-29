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
} else if (today == 15) {
  solsvg.style.left = '24px'
  solsvg.style.bottom = '51px'
} else if (today == 16) {
  solsvg.style.left = '36px'
  solsvg.style.bottom = '45px'
} else if (today == 17) {
  solsvg.style.left = '46px'
  solsvg.style.bottom = '37px'
} else if (today == 18) {
  solsvg.style.left = '58px'
  solsvg.style.bottom = '27px'
} else if (today == 19) {
  solsvg.style.left = '67px'
  solsvg.style.bottom = '17px'
} else if (today == 20) {
  solsvg.style.left = '76px'
  solsvg.style.bottom = '5px'
} else if (today == 21) {
  solsvg.style.left = '82px'
  solsvg.style.top = '8px'
} else if (today == 22) {
  solsvg.style.left = '85px'
  solsvg.style.top = '20px'
} else if (today == 23) {
  solsvg.style.left = '87px'
  solsvg.style.top = '33px'
} else if (today == 24) {
  solsvg.style.left = '90px'
  solsvg.style.top = '48px'
}
