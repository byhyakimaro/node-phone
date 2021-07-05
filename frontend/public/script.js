$('.icon-phone').addEventListener('click', () => {
	$('.cellphone .main .screens .icons').style.display = "none";
	$('.cellphone .main .screens .apps').style.display = "none";
	$('.cellphone .main .screens').style.background = "#23242e";
	$('.message').style.display = "block";
	$('.cellphone .main .screens .buttons-top').style.background = "rgb(44, 45, 58)";
	$('.cellphone .main .screens .buttons-top').style.borderRadius = "0";
	$('.cellphone .main .screens .buttons-top').style.borderTopRightRadius = "10px";
	$('.cellphone .main .screens .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.icon-contacts').addEventListener('click', () => {
	$('.cellphone .main .screens .icons').style.display = "none";
	$('.cellphone .main .screens .apps').style.display = "none";
	$('.cellphone .main .screens').style.background = "#23242e";
	$('.numbers').style.display = "block";
	$('.cellphone .main .screens .buttons-top').style.background = "rgb(44, 45, 58)";
	$('.cellphone .main .screens .buttons-top').style.borderRadius = "0";
	$('.cellphone .main .screens .buttons-top').style.borderTopRightRadius = "10px";
	$('.cellphone .main .screens .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.icon-whatsapp').addEventListener('click', () => {
	$('.cellphone .main .screens .icons').style.display = "none";
	$('.cellphone .main .screens .apps').style.display = "none";
	$('.cellphone .main .screens').style.background = "white";
	$('.whatsapp').style.display = "block";
	$('.cellphone .main .screens .buttons-top').style.background = "rgb(15 88 79)";
	$('.cellphone .main .screens .buttons-top').style.borderRadius = "0";
	$('.cellphone .main .screens .buttons-top').style.borderTopRightRadius = "10px";
	$('.cellphone .main .screens .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.icon-settings').addEventListener('click', () => {
	$('.cellphone .main .screens .icons').style.display = "none";
	$('.cellphone .main .screens .apps').style.display = "none";
	$('.cellphone .main .screens').style.background = "#23242e";
	//$('.configs').style.display = "block";
	$('.cellphone .main .screens .buttons-top').style.background = "rgb(44, 45, 58)";
	$('.cellphone .main .screens .buttons-top').style.borderRadius = "0";
	$('.cellphone .main .screens .buttons-top').style.borderTopRightRadius = "10px";
	$('.cellphone .main .screens .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.cellphone .main .screens .buttons .center').addEventListener('click', () => {
	$('.cellphone .main .screens .icons').style.display = "flex";
	$('.cellphone .main .screens .apps').style.display = "flex";
	$('.cellphone .main .screens').style.background = "url('https://cdn.discordapp.com/attachments/832460992196640829/833132876396101652/FundoIphone2.png')";
	$('.whatsapp').style.display = "none";
	$('.message').style.display = "none";
	$('.numbers').style.display = "none";
	//$('.configs').style.display = "none";
	$('.cellphone .main .screens .buttons-top').style.background = "rgba(49, 18, 18, 10%)";
	$('.cellphone .main .screens .buttons-top').style.borderRadius = "10px";
});