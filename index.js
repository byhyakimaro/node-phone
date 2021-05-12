const express = require('express');
var path = require('path');

const app = express();

// routes
app.use(express.static('public'));
app.set('views', './views');

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res) => {
	res.render('index')
})

app.listen(3000, () => {
  console.log(`server started in ${3000}`);
});