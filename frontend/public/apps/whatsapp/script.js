// // $('.whatsapp .whatsapp-chat .chat-header .icon-chat').addEventListener('click', () => {
// // 	$('.whatsapp .whatsapp-main').style.display = "block";
// // 	$('.whatsapp .whatsapp-chat').style.display = "none";
// // 	$('.cellphone .main .screens').style.background = "white";
// // });

// $('.whatsapp .whatsapp-header .whatsapp-status').addEventListener('click', (event) => {
// });

// $('.whatsapp .whatsapp-header .whatsappconversas').addEventListener('click', (event) => {
// 	$('.whatsapp .whatsapp-header .whatsapp-status').style.borderBottom = "0";
// 	$('.whatsapp .whatsapp-header .whatsappconversas').style.borderBottom = "4px solid white";
// 	$('.whatsapp .whatsapp-header .whatsapp-chamada').style.borderBottom = "0";
// 	$('.whatsapp .whatsapp-body .conversas').style.display = "flex";
// 	$('.whatsapp .whatsapp-body .status').style.display = "none";
// 	$('.whatsapp .whatsapp-body .chamadas').style.display = "none";
// });

// $('.whatsapp .whatsapp-header .whatsapp-chamada').addEventListener('click', (event) => {
// 	$('.whatsapp .whatsapp-header .whatsapp-status').style.borderBottom = "0";
// 	$('.whatsapp .whatsapp-header .whatsappconversas').style.borderBottom = "0";
// 	$('.whatsapp .whatsapp-header .whatsapp-chamada').style.borderBottom = "4px solid white";
// 	$('.whatsapp .whatsapp-body .conversas').style.display = "none";
// 	$('.whatsapp .whatsapp-body .status').style.display = "none";
// 	$('.whatsapp .whatsapp-body .chamadas').style.display = "flex";
// });

// $('.whatsapp .whatsapp-main .whatsapp-body .conversas .conversa .contato').addEventListener('click' , (event) => {
// 	$('.whatsapp .whatsapp-main').style.display = "none";
// 	$('.whatsapp .whatsapp-chat').style.display = "block";
// 	$('.cellphone .main .screens').style.background = "url('https://cdn.discordapp.com/attachments/758616655382577152/834937502703681536/giftly.png')";
// });

// var inputText = $('.whatsapp .whatsapp-chat .chat-send .text-chat input');
// var svgIcon = $('.whatsapp .whatsapp-chat .chat-send .button-chat svg path');
// var buttonChat = $('.whatsapp .whatsapp-chat .chat-send .button-chat');
// var chat = $('.whatsapp .whatsapp-chat .chat');
// var sendMessage = 'M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z';
// var sendAudio = 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z';
// var buttonText = false;
// inputText.addEventListener('keyup', () => {
// 	if (inputText.value != '') {
// 		svgIcon.setAttribute('d', sendMessage);
// 		buttonText = true;
// 	} 
// 	else {
// 		svgIcon.setAttribute('d', sendAudio);
// 		buttonText = false;
// 	}
// });

// function sanitizeHTML (str) {
// 	return str.replace(/[^\w. ]/gi, function (c) {
// 		return '&#' + c.charCodeAt(0) + ';';
// 	})
// }

// buttonChat.addEventListener('click', () => {
// 	var now = new Date;
// 	var hora = now.getHours();
// 	var minuto = now.getMinutes();
// 	var time = hora + ':' + minuto;
// 	var lastMessages = $('.whatsapp .whatsapp-main .whatsapp-body .conversas .conversa .contato .msg');
// 	var mensagem =
//   `<div class="msg-enviada">
//     	<div class="msg">
//     	<div class="texto">${sanitizeHTML(inputText.value)}</div>
// 			<div class="horario">${time}</div>
// 			<div class="check">
// 				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></svg>
// 			</div>
// 		</div>
// 	</div>`;

// 	if (buttonText) {
// 		chat.innerHTML = chat.innerHTML + mensagem;
// 		lastMessages.innerHTML = sanitizeHTML(inputText.value);
// 		inputText.value = '';
// 		svgIcon.setAttribute('d', sendAudio);
// 		buttonText = false;
// 	}
// });

// $('.whatsapp .whatsapp-main .whatsapp-body .new-chat').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-main').style.display = "none";
// 	$('.whatsapp .whatsapp-new-chat').style.display = "block";
// });

// $('.whatsapp .whatsapp-new-chat .header-new-chat .icon-new-chat').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-main').style.display = "block";
// 	$('.whatsapp .whatsapp-new-chat').style.display = "none";
// });

// $('.whatsapp .whatsapp-chat .chat-header .icon-ligacao').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-chat').style.display = "none";
// 	$('.whatsapp .whatsapp-call').style.display = "block";
// 	$('.cellphone .main .screens').style.background = "#0b6156";
// });

// $('.whatsapp .whatsapp-call .profile .end-call .call-icon').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-chat').style.display = "block";
// 	$('.whatsapp .whatsapp-call').style.display = "none";
// 	$('.whatsapp .whatsapp-chat .chat-call-min').style.display = "none";
// 	$('.whatsapp .whatsapp-main .main-call-min').style.display = "none";
// 	$('.whatsapp .whatsapp-chat .chat').style.height = "420px";
// 	$('.cellphone .main .screens').style.background = "url('https://cdn.discordapp.com/attachments/758616655382577152/834937502703681536/giftly.png')";
// });

// $('.whatsapp .whatsapp-main .whatsapp-body .chamadas .chamada .chamada-icon').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-chat').style.display = "none";
// 	$('.whatsapp .whatsapp-main').style.display = "none";
// 	$('.whatsapp .whatsapp-call').style.display = "block";
// 	$('.cellphone .main .screens').style.background = "#0b6156";
// });

// $('.whatsapp .whatsapp-call .header .header-top .top-icon').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-chat').style.display = "block";
// 	$('.whatsapp .whatsapp-call').style.display = "none";
// 	$('.whatsapp .whatsapp-chat .chat-call-min').style.display = "flex";
// 	$('.whatsapp .whatsapp-main .main-call-min').style.display = "flex";
// 	$('.whatsapp .whatsapp-chat .chat').style.height = "390px";
// 	$('.cellphone .main .screens').style.background = "url('https://cdn.discordapp.com/attachments/758616655382577152/834937502703681536/giftly.png')";
// });

// $('.whatsapp .whatsapp-chat .chat-call-min').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-chat').style.display = "none";
// 	$('.whatsapp .whatsapp-call').style.display = "block";
// 	$('.cellphone .main .screens').style.background = "#0b6156";
// });

// $('.whatsapp .whatsapp-main .main-call-min').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-main').style.display = "none";
// 	$('.whatsapp .whatsapp-call').style.display = "block";
// 	$('.cellphone .main .screens').style.background = "#0b6156";
// });

// $('.whatsapp .whatsapp-new-chat .contatos .novo-contato').addEventListener('click', () => {
// 	$('.buttons-top').style.background = "#2c2d3a";
// 	$('.whatsapp .whatsapp-new-chat').style.display = "none";
// 	$('.whatsapp .whatsapp-new-contacs').style.display = "block";
// });

// $('.whatsapp .whatsapp-new-contacs .new-contacs-header .new-contacs-closed').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-new-chat').style.display = "block";
// 	$('.whatsapp .whatsapp-new-contacs').style.display = "none";
// 	$('.buttons-top').style.background = "rgb(15 88 79)";
// });

// $('.whatsapp .whatsapp-new-contacs .new-contacs-header .new-contacs-save').addEventListener('click', () => {
// 	$('.whatsapp .whatsapp-new-chat').style.display = "block";
// 	$('.whatsapp .whatsapp-new-contacs').style.display = "none";
// 	$('.buttons-top').style.background = "rgb(15 88 79)";
// });

import { data, week, monthYear, getAppsSystem, $ } from '../../api/setSystem.js'
class Whatsapp {
	constructor() {
		this.element = $('.whatsapp')
		this.Load()
	}
	
	Load() {
		this.element.onclick = ({ target }) => {
			console.log(target)
			const service = target.dataset.service
			try {
				this[service]()
			}
			catch{}
		}
	}

	Status() {
		$('.whatsapp .whatsapp-header .whatsapp-status').style.borderBottom = "4px solid white";
		$('.whatsapp .whatsapp-header .whatsappconversas').style.borderBottom = "0";
		$('.whatsapp .whatsapp-header .whatsapp-chamada').style.borderBottom = "0";
		$('.whatsapp .whatsapp-body .conversas').style.display = "none";
		$('.whatsapp .whatsapp-body .status').style.display = "flex";
		$('.whatsapp .whatsapp-body .chamadas').style.display = "none";
	}

	sanitizeText (str) {
		return str.replace(/[^\w. ]/gi, function (c) {
			return '&#' + c.charCodeAt(0) + ';';
		})
	}
}

const whatsapp = new Whatsapp()
