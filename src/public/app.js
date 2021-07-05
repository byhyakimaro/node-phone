let $ = document.querySelector.bind(document);

const apps = [
	{
		name: 'whatsapp',
		html: `${this.name}/index.html`,
		style: `${this.name}/style.css`
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
		return $(`.app-screen.active`);
	},
	openApp(app) {
		const lastApp = this.nowApp;

		if(typeof app === 'string')
			app = apps.find(({ name }) => name === app.toLowerCase());

		const toggle = (element, show = true) => {
			if(!element) return;
			element.classList[show ? 'remove' : 'add']('hidden');
			element.classList[show ? 'add' : 'remove']('active');
		};
      
		let newApp;
      
		if(app.cache) {
			toggle(app.cache);
			newApp = app.cache;
		} else {
			const div = document.createElement('div');

			div.classList.add('app-screen', app.name, 'hidden');
			div.dataset.app = app.name;
			div.innerHTML = app.html;

			if(app.style) {
				const style = document.createElement('style');

				style.innerHTML = app.style;
				div.appendChild(style);
			};
			$('.screens').appendChild(div);

			setTimeout(() => toggle(div), 1);
			if(app.name === 'home-screen') { app.cache = div };
			newApp = div;

			const sameApp = newApp === lastApp;
			setTimeout(() => {
					if(!sameApp) {
						toggle(lastApp, false);
						
						const mode = newApp.dataset.app !== 'home-screen' ? 'add' : 'remove';
													
						if(lastApp) {
							const lastItem = apps.find(({ name }) => name === lastApp.dataset.app);
							
							if(lastItem && lastItem.unload) lastItem.unload(this, lastApp);
							
							if(mode === 'remove') setTimeout(() => lastApp.parentElement.removeChild(lastApp), 500);
						};

					}; 

			}, 1);

		};
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
		
		const lastApp = this.historyApps.shift();
		this.openApp(lastApp);
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