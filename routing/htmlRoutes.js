//path modules      
var path = require('path');

module.exports = function(app) {
  // catch-all route for sending home page
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // route for displaying survey page
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

};