import { $, data, week, monthYear, getAppsSystem } from './api/setSystem.js'

const socket = io('/')
socket.on('AppsInstalled', function(appsInstalled) {
	appsInstalled.forEach((element) => {
		apps.push(element)
	})
})

const apps = [getAppsSystem()]
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
		this.openApp('home')
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
	
	loadApp() {
		this.element.onclick = ({ target }) => {
			const app = target.dataset.app
			if(app) this.openApp(app)
			
			const button = target.dataset.button
			if(button) this[button]()
		}
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
			this.logOpen.includes(app.name) ? app.script = null : this.logOpen.unshift(app.name)
			if(app.script) {
				const script = document.createElement('script')
				script.innerHTML = app.script
				$('head').appendChild(script)
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
