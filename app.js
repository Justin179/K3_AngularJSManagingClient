var express = require('express');
var app = express();

// tell express i will use ejs as my view engine (template engine)
app.set('view engine', 'ejs');

// setup static resource(empty files)
app.use('/assets', express.static(__dirname + '/public'));


    var people = [
        {name:'John Doe'},
        {name:'Jane Doe'},
        {name: 'Jim Doe'}
    ];


// localhost:3000
app.get('/', function(req, res) {
	
	res.render('index',{serverPeople:people}); // 會自動找views目錄下的index
	
});

// listen to port 3000
var port = process.env.PORT || 3000;
app.listen(port);