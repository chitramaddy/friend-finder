//dependencies
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

//create server with express
var app = express();

//set up a port
var PORT = process.env.PORT || 3000;

//set up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static(__dirname + '/public'));

//set up routes
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

//turn the server on
app.listen(PORT, function(){
    console.log('You are now listening to PORT: '+ PORT);
});