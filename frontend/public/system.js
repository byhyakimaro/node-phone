import { data, week, monthYear, getAppsSystem, $ } from './api/setSystem.js'
const socket = io('/')

socket.on('AppsInstalled', function(appsInstalled) {
	appsInstalled.forEach((element) => {
		apps.push(element)
	})
})

const apps = [getAppsSystem()]
class Phone {
	constructor() {
		this.element = $('.phone')
		this.recentApps = []

		this.hours = data.toLocaleTimeString()
		this.day = data.getDate()
		this.dayOfWeek = week[data.getDay()]
		this.month = monthYear[data.getMonth()]
		this.year = data.getFullYear()
		
		this.openApp('home')
		this.loadEvents()
		this.updateTime()
		this.setWallpapers('https://cdn.discordapp.com/attachments/832460992196640829/833132876396101652/FundoIphone2.png')
	}
	
	setWallpapers(wallpaper) {
		this.element.children[0].style.background = `url('${wallpaper}')`
	}

	updateTime() {
		$('.time .data').innerHTML = `${this.dayOfWeek},${this.day} de ${this.month}`
		$('.horario').innerHTML = `${this.hours.split(':')[0]}:${this.hours.split(':')[1]}`
		$('.time .hora').innerHTML = this.hours.split(':')[0]
		$('.time .minuto').innerHTML = this.hours.split(':')[1]
		setTimeout(() => { this.updateTime() }, 1000)
	}

	get nowApp() {
		return $(`.app-screen.active`)
	}

	loadEvents() {
		this.element.onclick = ({ target }) => {
			const app = target.dataset.app
			if(app) this.openApp(app)

			const button = target.dataset.button
			if(button) this[button]()
		}

		const homeList = $('.home-list');
      
		let homeDown, current, startX = 0, currentX = 0;
      
		homeList.onmousedown = document.onmouseup = ({ target, type, clientX }) => {
			current = $('.home-item.active');
													
			if(type === 'mousedown') {
				if(homeDown) return;
			
				if(!target.classList.contains('home-item')) return;

				homeDown = true;
				homeList.style.transition = 'transform .05s';
				document.body.classList.add('grabbing');
			
				startX = clientX - currentX;
			} else {
				if(!homeDown) return;
			
				homeDown = false;
				homeList.style.transition = 'transform .3s';
				document.body.classList.remove('grabbing');
			
				const { width } = current.getBoundingClientRect();
				
				const currentI = parseInt(current.dataset.i);
				const apply = -Math.round((currentX + (currentI * width)) / width);
				const screenLength = homeList.children.length -1;
			
				let nextI = currentI + apply, newX = 0;
										
				if(nextI < 0) nextI = 0;
				if(nextI > screenLength) nextI = screenLength;
										
				const next = $(`.home-item[data-i="${nextI}"]`);
										
				if(apply && next) {
					current.classList.remove('active');
					next.classList.add('active');
				
					const nextI = parseInt(next.dataset.i);
					const screenList = $('.home-screens-list');
				
					// const lastItem = document.querySelector(`.screen-item.active`);
					// const newItem = document.querySelector(`.screen-item[data-i="${nextI}"]`);

					// lastItem.classList.remove('active');
					// newItem.classList.add('active');
				
					newX = - nextI * width;
				} else {
					newX = - currentI * width;
				};
			
				homeList.style.transform = `translateX(${newX}px)`;
				currentX = newX;
			};
		};
	
		document.onmousemove = ({ clientX: x, clientY: y }) => {
			if(!homeDown) return;
		
			currentX = x - startX;
		
			homeList.style.transform = `translateX(${currentX}px)`;
		};
	}

	openApp(app) {
		const lastApp = this.nowApp
		app = apps.find(({ name }) => name === app.toLowerCase())
		if(!app) throw new Error('Application not found')
	
		const toggle = (element, show = true) => {
			if(!element) return
			element.classList[show ? 'remove' : 'add']('hidden')
			element.classList[show ? 'add' : 'remove']('active')
		}
		var newApp
      
		if(app.cache) {
			toggle(app.cache)
			newApp = app.cache
		} else {
			const div = document.createElement('div')
			div.classList.add('app-screen', app.name, 'hidden')
			div.dataset.alreadyOpen = app.name
			div.innerHTML = app.html

			if(app.style) {
				const style = document.createElement('style')
				style.innerHTML = app.style
				div.appendChild(style)
			}

			$('.screens').appendChild(div)
			if(app.script) {
				const script = document.createElement('script')
				script.innerHTML = app.script
				script.setAttribute('type','module')
				div.appendChild(script)
			}
			
			setTimeout(() => toggle(div), 1)
			if(app.name === 'home') { app.cache = div }
			
			newApp = div
		}
		
		const sameApp = newApp === lastApp
		setTimeout(() => {
			if(!sameApp) {
				toggle(lastApp, false)
				const mode = newApp.dataset.alreadyOpen !== 'home' ? 'add' : 'remove'		
				
				if(lastApp) {
					const lastItem = apps.find(({ name }) => name === lastApp.dataset.alreadyOpen)
					if(lastItem && lastItem.unload) lastItem.unload(this, lastApp)
					if(mode === 'remove') setTimeout(() => lastApp.parentElement.removeChild(lastApp), 500)
				}
			} 
		}, 1)
		
		setTimeout(() => {
			$('.loading-screen', app).classList.add('hide');
		}, (1 + Math.floor(Math.random() * 1.5)) * 1000);

		if(sameApp) return
		if(lastApp) this.recentApps.unshift(lastApp.dataset.alreadyOpen)
	}

	goRecent() {

	}

	goHome() {
		this.openApp('home')
	}

	goBack() {
		if(this.nowApp.dataset.alreadyOpen === 'home') return
		const lastApp = this.recentApps.shift()
		lastApp ? this.openApp(lastApp) : this.openApp('home')
	}
}
const phone = new Phone()
