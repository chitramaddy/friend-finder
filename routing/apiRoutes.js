//dependencies
var uuid = require ("uuid/v4");

//data
var profiles = require("../app/data/friends");

module.exports = function(app){
    
    //get all the user profile and send back json
    app.get("/api/friends", function(req, res){
        res.json(profiles);
    });

    //post new profiles to the server
    app.post("/api/friends/new", function(req, res){

        //get info from POST request
        var newProfile = req.body;

        newProfile.id = uuid();

        profiles.push(newProfile);

        res.json(newProfile);
    })
}
