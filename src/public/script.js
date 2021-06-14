$('.icon-phone').addEventListener('click', () => {
	$('.root .main .screen .icons').style.display = "none";
	$('.root .main .screen .apps').style.display = "none";
	$('.root .main .screen').style.background = "#23242e";
	$('.message').style.display = "block";
	$('.root .main .screen .buttons-top').style.background = "rgb(44, 45, 58)";
	$('.root .main .screen .buttons-top').style.borderRadius = "0";
	$('.root .main .screen .buttons-top').style.borderTopRightRadius = "10px";
	$('.root .main .screen .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.icon-contacts').addEventListener('click', () => {
	$('.root .main .screen .icons').style.display = "none";
	$('.root .main .screen .apps').style.display = "none";
	$('.root .main .screen').style.background = "#23242e";
	$('.numbers').style.display = "block";
	$('.root .main .screen .buttons-top').style.background = "rgb(44, 45, 58)";
	$('.root .main .screen .buttons-top').style.borderRadius = "0";
	$('.root .main .screen .buttons-top').style.borderTopRightRadius = "10px";
	$('.root .main .screen .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.icon-whatsapp').addEventListener('click', () => {
	$('.root .main .screen .icons').style.display = "none";
	$('.root .main .screen .apps').style.display = "none";
	$('.root .main .screen').style.background = "white";
	$('.whatsapp').style.display = "block";
	$('.root .main .screen .buttons-top').style.background = "rgb(15 88 79)";
	$('.root .main .screen .buttons-top').style.borderRadius = "0";
	$('.root .main .screen .buttons-top').style.borderTopRightRadius = "10px";
	$('.root .main .screen .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.icon-settings').addEventListener('click', () => {
	$('.root .main .screen .icons').style.display = "none";
	$('.root .main .screen .apps').style.display = "none";
	$('.root .main .screen').style.background = "#23242e";
	//$('.configs').style.display = "block";
	$('.root .main .screen .buttons-top').style.background = "rgb(44, 45, 58)";
	$('.root .main .screen .buttons-top').style.borderRadius = "0";
	$('.root .main .screen .buttons-top').style.borderTopRightRadius = "10px";
	$('.root .main .screen .buttons-top').style.borderTopLeftRadius = "10px";
});

$('.root .main .screen .buttons .center').addEventListener('click', () => {
	$('.root .main .screen .icons').style.display = "flex";
	$('.root .main .screen .apps').style.display = "flex";
	$('.root .main .screen').style.background = "url('https://cdn.discordapp.com/attachments/832460992196640829/833132876396101652/FundoIphone2.png')";
	$('.whatsapp').style.display = "none";
	$('.message').style.display = "none";
	$('.numbers').style.display = "none";
	//$('.configs').style.display = "none";
	$('.root .main .screen .buttons-top').style.background = "rgba(49, 18, 18, 10%)";
	$('.root .main .screen .buttons-top').style.borderRadius = "10px";
	$('.root .main .glass').style.display = "flex";
});