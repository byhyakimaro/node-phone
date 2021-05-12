$('.root .main .screen .whatsapp .whatsapp-chat .chat-header .icon-chat').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-main').style.display = "block";
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "none";
	$('.root .main .screen').style.background = "white";
});

$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-status').addEventListener('click', (event) => {
	$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-status').style.borderBottom = "4px solid white";
	$('.root .main .screen .whatsapp .whatsapp-header .whatsappconversas').style.borderBottom = "0";
	$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-chamada').style.borderBottom = "0";
	$('.root .main .screen .whatsapp .whatsapp-body .conversas').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-body .status').style.display = "flex";
	$('.root .main .screen .whatsapp .whatsapp-body .chamadas').style.display = "none";
});

$('.root .main .screen .whatsapp .whatsapp-header .whatsappconversas').addEventListener('click', (event) => {
	$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-status').style.borderBottom = "0";
	$('.root .main .screen .whatsapp .whatsapp-header .whatsappconversas').style.borderBottom = "4px solid white";
	$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-chamada').style.borderBottom = "0";
	$('.root .main .screen .whatsapp .whatsapp-body .conversas').style.display = "flex";
	$('.root .main .screen .whatsapp .whatsapp-body .status').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-body .chamadas').style.display = "none";
});

$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-chamada').addEventListener('click', (event) => {
	$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-status').style.borderBottom = "0";
	$('.root .main .screen .whatsapp .whatsapp-header .whatsappconversas').style.borderBottom = "0";
	$('.root .main .screen .whatsapp .whatsapp-header .whatsapp-chamada').style.borderBottom = "4px solid white";
	$('.root .main .screen .whatsapp .whatsapp-body .conversas').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-body .status').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-body .chamadas').style.display = "flex";
});

$('.root .main .screen .whatsapp .whatsapp-main .whatsapp-body .conversas .conversa .contato').addEventListener('click' , (event) => {
	$('.root .main .screen .whatsapp .whatsapp-main').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "block";
	$('.root .main .screen').style.background = "url('https://cdn.discordapp.com/attachments/758616655382577152/834937502703681536/giftly.png')";
});

const inputText = $('.root .main .screen .whatsapp .whatsapp-chat .chat-send .text-chat input');
const svgIcon = $('.root .main .screen .whatsapp .whatsapp-chat .chat-send .button-chat svg path');
const buttonChat = $('.root .main .screen .whatsapp .whatsapp-chat .chat-send .button-chat');
const chat = $('.root .main .screen .whatsapp .whatsapp-chat .chat');
const sendMessage = 'M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z';
const sendAudio = 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z';
let buttonText = false;
inputText.addEventListener('keyup', () => {
	if (inputText.value != '') {
		svgIcon.setAttribute('d', sendMessage);
		buttonText = true;
	} 
	else {
		svgIcon.setAttribute('d', sendAudio);
		buttonText = false;
	}
});

var sanitizeHTML = function (str) {
	return str.replace(/[^\w. ]/gi, function (c) {
		return '&#' + c.charCodeAt(0) + ';';
	});
};

buttonChat.addEventListener('click', () => {
	const now = new Date;
	const hora = now.getHours();
	const minuto = now.getMinutes();
	const time = hora + ':' + minuto;
	const lastMessages = $('.root .main .screen .whatsapp .whatsapp-main .whatsapp-body .conversas .conversa .contato .msg');
	let mensagem =
  `<div class="msg-enviada">
    	<div class="msg">
    	<div class="texto">${sanitizeHTML(inputText.value)}</div>
			<div class="horario">${time}</div>
			<div class="check">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></svg>
			</div>
		</div>
	</div>`;

	if (buttonText) {
		chat.innerHTML = chat.innerHTML + mensagem;
		lastMessages.innerHTML = sanitizeHTML(inputText.value);
		inputText.value = '';
		svgIcon.setAttribute('d', sendAudio);
		buttonText = false;
	}
});

$('.root .main .screen .whatsapp .whatsapp-main .whatsapp-body .new-chat').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-main').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-new-chat').style.display = "block";
});

$('.root .main .screen .whatsapp .whatsapp-new-chat .header-new-chat .icon-new-chat').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-main').style.display = "block";
	$('.root .main .screen .whatsapp .whatsapp-new-chat').style.display = "none";
});

$('.root .main .screen .whatsapp .whatsapp-chat .chat-header .icon-ligacao').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-call').style.display = "block";
	$('.root .main .screen').style.background = "#0b6156";
});

$('.root .main .screen .whatsapp .whatsapp-call .profile .end-call .call-icon').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "block";
	$('.root .main .screen .whatsapp .whatsapp-call').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-chat .chat-call-min').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-main .main-call-min').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-chat .chat').style.height = "420px";
	$('.root .main .screen').style.background = "url('https://cdn.discordapp.com/attachments/758616655382577152/834937502703681536/giftly.png')";
});

$('.root .main .screen .whatsapp .whatsapp-main .whatsapp-body .chamadas .chamada .chamada-icon').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-main').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-call').style.display = "block";
	$('.root .main .screen').style.background = "#0b6156";
});

$('.root .main .screen .whatsapp .whatsapp-call .header .header-top .top-icon').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "block";
	$('.root .main .screen .whatsapp .whatsapp-call').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-chat .chat-call-min').style.display = "flex";
	$('.root .main .screen .whatsapp .whatsapp-main .main-call-min').style.display = "flex";
	$('.root .main .screen .whatsapp .whatsapp-chat .chat').style.height = "390px";
	$('.root .main .screen').style.background = "url('https://cdn.discordapp.com/attachments/758616655382577152/834937502703681536/giftly.png')";
});

$('.root .main .screen .whatsapp .whatsapp-chat .chat-call-min').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-chat').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-call').style.display = "block";
	$('.root .main .screen').style.background = "#0b6156";
});

$('.root .main .screen .whatsapp .whatsapp-main .main-call-min').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-main').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-call').style.display = "block";
	$('.root .main .screen').style.background = "#0b6156";
});

$('.root .main .screen .whatsapp .whatsapp-new-chat .contatos .novo-contato').addEventListener('click', () => {
	$('.root .main .screen .buttons-top').style.background = "#2c2d3a";
	$('.root .main .screen .whatsapp .whatsapp-new-chat').style.display = "none";
	$('.root .main .screen .whatsapp .whatsapp-new-contacs').style.display = "block";
});

$('.root .main .screen .whatsapp .whatsapp-new-contacs .new-contacs-header .new-contacs-closed').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-new-chat').style.display = "block";
	$('.root .main .screen .whatsapp .whatsapp-new-contacs').style.display = "none";
	$('.root .main .screen .buttons-top').style.background = "rgb(15 88 79)";
});

$('.root .main .screen .whatsapp .whatsapp-new-contacs .new-contacs-header .new-contacs-save').addEventListener('click', () => {
	$('.root .main .screen .whatsapp .whatsapp-new-chat').style.display = "block";
	$('.root .main .screen .whatsapp .whatsapp-new-contacs').style.display = "none";
	$('.root .main .screen .buttons-top').style.background = "rgb(15 88 79)";
});