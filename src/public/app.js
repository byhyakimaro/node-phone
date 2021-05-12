//let $ = document.querySelector.bind(document);

const main = {
  updateTime() {
		var date = new Date;

		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hour = date.getHours();

		$('.horario').innerHTML = `${hour}:${minutes}`;
		$('.time .hora').innerHTML = hour;
		$('.time .minuto').innerHTML = minutes;
		setTimeout(() => { this.updateTime() }, 1000);
	},
	start() {
		this.updateTime()
	},
	setWallpapers(wallpaper) {
		$('.screen').style.background = `url('${wallpaper}')`
	}
}

main.start();