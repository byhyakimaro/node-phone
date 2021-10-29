const data = new Date
const week = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
const monthYear = [
'janeiro',
'fevereiro',
'março',
'abril',
'maio',
'junho',
'julho',
'agosto',
'setembro',
'outubro',
'novembro',
'dezembro'
]

const appsSystem = [
{
  name: 'home', 
  html: `
    <div class="apps">
      <div class="time">
        <div class="hora">12</div>
        <div class="minuto">00</div>
        <div class="data">qua,17 marco</div>
      </div>
    </div>
    <div class="icons">
      <div class="icon icon-phone">
        <img data-app="message" src="https://cdn.discordapp.com/attachments/758616655382577152/834931791109554206/messaging.png">
      </div>
      <div class="icon icon-contacts">
        <img data-app="contatos" src="https://cdn.discordapp.com/attachments/758616655382577152/833170257392173076/contacts.png">
      </div>
      <div class="icon icon-whatsapp">
        <img data-app="whatsapp" src="https://cdn.discordapp.com/attachments/758616655382577152/833170261695004682/whatsapp.png">
      </div>
      <div class="icon icon-settings">
        <img src="https://cdn.discordapp.com/attachments/758616655382577152/833170248248983563/settings.png">
      </div>
    </div>`
}
]

const getAppsSystem = () => {
  for (let i = 0; i < appsSystem.length; i++) {
    return appsSystem[i];
  }
}

function $(param) {
  if (typeof param == 'string'|| param instanceof String) {
    return document.querySelector(param);
  }
}

export { data, week, monthYear, getAppsSystem, $ }