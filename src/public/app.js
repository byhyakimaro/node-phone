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
	historyApps: [],
	get nowApp() {
		return $('.screens');
	},
	openApp(app) {
		const lastApp = this.nowApp.dataset.app;

		this.historyApps.unshift(app);
		this.nowApp.dataset.app = app;
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
	goBack() {
		if(this.nowApp.dataset.app === 'home-screen') return;

		this.historyApps.shift();
	},
	loadApp() {
		this.element.onclick = ({ target }) => {
			const app = target.dataset.app;
			if(app) this.openApp(app);

			const button = target.dataset.button;
      if(button) this[button]();
		}
	}
}

main.start();