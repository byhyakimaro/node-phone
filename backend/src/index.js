const express = require('express');
var path = require('path');

const app = express();
const port = 3000;

//seta o front na pasta public e adicionar html
app.use(express.static(path.join(`${process.cwd()}/frontend/public`)));
app.set('views', path.join(`${process.cwd()}/frontend/public`));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res) => {
	res.render('index')
})

app.listen(port, () => {
  console.log(`server started in ${port}`);
});