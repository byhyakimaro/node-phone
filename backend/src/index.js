const express = require('express');
var path = require('path');

const app = express();

// routes
app.use(express.static(`${process.cwd()}/frontend/public`));
app.set('views', `${process.cwd()}/frontend/public`);

// view engine setup
app.set('views', path.join(`${process.cwd()}/frontend/views`));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res) => {
	res.render('index')
})

app.listen(port = 3000, () => {
  console.log(`server started in ${port}`);
});