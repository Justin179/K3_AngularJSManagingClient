var express = require('express');
var app = express();

// ejs view
app.set('view engine', 'ejs');

// static resource(empty files)
app.use('/assets', express.static(__dirname + '/public'));

// localhost:3000
app.get('/', function(req, res) {
	
	res.render('index'); // 會自動找views目錄下的index
	
});

// listen to port 3000
var port = process.env.PORT || 3000;
app.listen(port);