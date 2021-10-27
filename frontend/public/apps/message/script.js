$('.message .message-main .body-main .messages .message').addEventListener('click', () => {
	$('.message .message-main').style.display = "none";
	$('.message .message-chat').style.display = "block";
});

$('.message .message-chat .header-chat .icon-chat').addEventListener('click', () => {
	$('.message .message-main').style.display = "block";
	$('.message .message-chat').style.display = "none";
});

var inputMessage = $('.message .message-chat .chat-send .chat-send-box input');
var svg = $('.message .message-chat .chat-send .chat-send-box .icon-send svg path');
var button = $('.message .message-chat .chat-send .chat-send-box .icon-send');
var svgSend = 'M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z';
var svgAudio = 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z';
var texto = false;
inputMessage.addEventListener('keyup', () => {
	if (inputMessage.value != ''){
		svg.setAttribute('d', svgSend);
		texto = true;
	}
	else {
		svg.setAttribute('d', svgAudio);
		texto = false;
	}
});

var sanitizeHTML = function (str) {
	return str.replace(/[^\w. ]/gi, function (c) {
		return '&#' + c.charCodeAt(0) + ';';
	});
};

button.addEventListener('click', () => {
	var now = new Date;
	var hora = now.getHours();
	var minuto = now.getMinutes();
	var time = hora + ':' + minuto;
	var messages = $('.message .message-chat .chat .chat-time .chat-messages');
	var lastMessage = $('.message .message-main .body-main .messages .message .message-text .text');
	var messagem = 
	`<div class="mensagem-enviada">
				<div class="chat-texto">
			<div class="texto">${sanitizeHTML(inputMessage.value)}</div>
		</div>
	</div>`;

	if (texto) {
		messages.innerHTML = messages.innerHTML + messagem;
		lastMessage.innerHTML = sanitizeHTML(inputMessage.value);
		inputMessage.value = '';
		svg.setAttribute('d', svgAudio);
		texto = false;
	}
});