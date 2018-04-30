//dependencies
var uuid = require ("uuid/v4");

//data
var friends = require("../app/data/friends");

module.exports = function(app){
    
    //get all the user profile and send back json
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    //post new profiles to the server
    app.post("/api/friends/new", function(req, res){

        //get info from POST request
        var friend = req.body;

        friend.id = uuid();

        friends.push(friend);

        res.json(friend);
        console.log(friend);
    })
}
