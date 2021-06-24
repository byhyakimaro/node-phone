let $ = document.querySelector.bind(document);

const apps = [
	{
		name: 'whatsapp',
		html: ``
	}
];

const week = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];

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
'dezembro'];

const main = {
	element: $('.cellphone'),
	get nowApp() {
		return $('.screens').dataset.app;
	},
	openApp(app) {
		const lastApp = this.nowApp;

		if(typeof app === 'string')
			app === apps.find
	},
  updateTime() {
		var date = new Date;

		var time = date.toLocaleTimeString().split(':');
		var year = date.getFullYear();
		var month = monthYear[date.getMonth()]; // January = 0; February = 1, etc.
		var day = date.getDate();

		var dayOfWeek = week[date.getDay()]; // Sunday = 0, Monday = 1, etc.
		$('.time .data').innerHTML = `${dayOfWeek},${day} de ${month}`;
		$('.horario').innerHTML = `${time[0]}:${time[1]}`;
		$('.time .hora').innerHTML = time[0];
		$('.time .minuto').innerHTML = time[1];
		setTimeout(() => { this.updateTime() }, 1000);
	},
	start() {
		this.updateTime();
		this.loadApp();
		this.setWallpapers('https://cdn.discordapp.com/attachments/832460992196640829/833132876396101652/FundoIphone2.png');
	},
	setWallpapers(wallpaper) {
		this.element.style.background = `url('${wallpaper}')`
	},
	loadApp() {
		this.element.onclick = ({ target }) => {
			const app = target.dataset.app;
			if(app) console.log(app);
		}
	}
}

main.start();