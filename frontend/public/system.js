const $ = document.querySelector.bind(document)
const socket = io('/')

socket.on('AppsInstalled', function(appsInstalled) {
	appsInstalled.forEach((element) => {
		apps.push(element)
	})
})

const apps = [
	{
		name: 'home-screen', 
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

class Phone {
	constructor() {
		this.element = $('.cellphone')
		this.recentApps = []
		this.logOpen = []

		this.hours = data.toLocaleTimeString()
		this.day = data.getDate()
		this.dayOfWeek = week[data.getDay()]
		this.month = monthYear[data.getMonth()]
		this.year = data.getFullYear()

		this.loadApp()
		this.openApp('home-screen')
		this.updateTime()
		this.setWallpapers('https://cdn.discordapp.com/attachments/832460992196640829/833132876396101652/FundoIphone2.png')
	}

	get nowApp() {
		return $(`.app-screen.active`)
	}

	openApp(app) {
		const lastApp = this.nowApp
		if(typeof app === 'string') app = apps.find(({ name }) => name === app.toLowerCase())
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

			if(app.script && !this.logOpen.includes(app.name)) {
				console.log(this.logOpen, app.name)
				this.logOpen.unshift(app.name)
				const script = document.createElement('script')
				script.innerHTML = app.script
				$('head').appendChild(script)
			}
			console.log(this.logOpen, app.name)
			$('.screens').appendChild(div)
			
			setTimeout(() => toggle(div), 1)
			if(app.name === 'home-screen') { app.cache = div }
			
			newApp = div
		}
		
		const sameApp = newApp === lastApp
		setTimeout(() => {
			if(!sameApp) {
				toggle(lastApp, false)
				const mode = newApp.dataset.alreadyOpen !== 'home-screen' ? 'add' : 'remove'		
				
				if(lastApp) {
					const lastItem = apps.find(({ name }) => name === lastApp.dataset.alreadyOpen)
					if(lastItem && lastItem.unload) lastItem.unload(this, lastApp)
					if(mode === 'remove') setTimeout(() => lastApp.parentElement.removeChild(lastApp), 500)
				}
			} 
		}, 1)
		
		if(sameApp) return
		if(lastApp) this.recentApps.unshift(lastApp.dataset.alreadyOpen)
	}

	updateTime() {
		var time = this.hours.split(':')
		var month = this.month
		var day = this.day
		var dayOfWeek =  this.dayOfWeek

		$('.time .data').innerHTML = `${dayOfWeek},${day} de ${month}`
		$('.horario').innerHTML = `${time[0]}:${time[1]}`
		$('.time .hora').innerHTML = time[0]
		$('.time .minuto').innerHTML = time[1]
		setTimeout(() => { this.updateTime() }, 1000)
	}

	setWallpapers(wallpaper) {
		this.element.children[0].style.background = `url('${wallpaper}')`
	}

	goHome() {
		this.openApp('home-screen')
	}

	goBack() {
		if(this.nowApp.dataset.alreadyOpen === 'home-screen') return
		const lastApp = this.recentApps.shift()
		lastApp ? this.openApp(lastApp) : this.openApp('home-screen')
	}

	loadApp() {
		this.element.onclick = ({ target }) => {
			const app = target.dataset.app
			if(app) this.openApp(app)

			const button = target.dataset.button
      if(button) this[button]()
		}
	}

}

const phone = new Phone()
