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
    <div class="home-list">
      <div class="home-item active" data-i="0">
        <div class="time-width">
          <div class="time">
            <div class="hora">12</div>
            <div class="minuto">00</div>
            <div class="data">qua,17 marco</div>
          </div>
        </div>
      </div>
      <div class="home-item" data-i="1"></div>
      <div class="home-item" data-i="2"></div>
    </div>
    <div class="icons-bottom">
      <div class="icon icon-phone">
        <img data-app="message" src="https://cdn.discordapp.com/attachments/758616655382577152/834931791109554206/messaging.png">
      </div>
      <div class="icon icon-contacts">
        <img data-app="contatos" src="https://cdn.discordapp.com/attachments/758616655382577152/833170257392173076/contacts.png">
      </div>
      <div class="icon icon-internet">
        <img data-app="internet" src="https://media.discordapp.net/attachments/758616655382577152/903814452217012304/internet.png">
      </div>
      <div class="icon icon-whatsapp">
        <img data-app="whatsapp" src="https://cdn.discordapp.com/attachments/758616655382577152/833170261695004682/whatsapp.png">
      </div>
    </div>
    `,
    style: `
    .home {
      padding: 3rem 0.65rem 4rem 0.65rem;
    }
    .home-list,.home-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .home-list {
      height: 85%;
      flex-direction: row;
      transition: transform .1s;
    }
    .home-item {
      min-width: 100%;
      height: 100%;
    }
    .time-width {
      padding: 1rem;
    }
    .time-width .time {
      text-shadow: 0.1em 0.1em 0.2em black;
      font-size: 70px;
    }
    .time-width .hora, .time-width .minuto {
      padding-left: 10px;
    }
    .time-width .time .data {
      font-size: 13px;
    }
    .icons-bottom {
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      justify-content: center;
      position: absolute;
      bottom: 55px;
    }
    .icons-bottom .icon img {
      width: 43px;
    }
    .icons-bottom .icon {
      padding: 5px 10px;
    }
    .icons-bottom .icon:hover {
      transform: scale(1.05);
    }
    `,
},
{
  name: 'recent',
  html: '<div></div>',
  style: '',
}
]

const getAppsSystem = () => {
  const apps = [];
  for (let i = 0; i < appsSystem.length; i++) {
    apps.push(appsSystem[i])
  }
  return apps;
}

function $(param) {
  if (typeof param == 'string'|| param instanceof String) {
    return document.querySelector(param);
  }
}

export { data, week, monthYear, getAppsSystem, $ }
