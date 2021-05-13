//let $ = document.querySelector.bind(document);

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
  updateTime() {
		var date = new Date;

		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hour = date.getHours();

		var year = date.getFullYear();
		var month = monthYear[date.getMonth()]; // beware: January = 0; February = 1, etc.
		var day = date.getDate();

		var dayOfWeek = week[date.getDay()]; // Sunday = 0, Monday = 1, etc.
		$('.time .data').innerHTML = `${dayOfWeek},${day} de ${month}`;
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