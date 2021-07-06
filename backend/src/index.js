const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//seta o front na pasta public e adicionar html
app.use(express.static(path.join(`${process.cwd()}/frontend/public`)));
app.set('views', path.join(`${process.cwd()}/frontend/public`));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const appsInstalled = require('./services/apps');
const routes = require('./routes');

app.use(routes);

//escuta qualquer conexão nova de socket
io.on('connection', socket => {
	console.log(`Socket Novo: ${socket.id}`);

	//envia as mensagem do array
	socket.emit('AppsInstalled', appsInstalled);
});

const port = 3000;
server.listen(port, () => {
  console.log(`server started in ${port}`);
});