//dependencies
var uuid = require("uuid/v4");

//data
var friends = require("../app/data/friends");

module.exports = function (app) {

	//get all the user profile and send back json
	app.get("/api/friends", function (req, res) {
		res.json(friends);
	});

	//post new profiles to the server
	app.post("/api/friends/new", function (req, res) {

		//get info from POST request
		var friend = req.body;

		friend.id = uuid();

		friends.push(friend);

		return res.json(friend);
		console.log(friend);
		findFriend(friend);
	});

	function findFriend(friend) {

		//to store the new friend's score in an array
		var scoreOne = [];
		scoreOne = friend.score;

		//to get the existing friends score in an array to compare
		var diffArr = [];
		var otherFriends = [];

		for (var i = 0; i < friends.length; i++) {

			//to make sure the newfriend is not compared against themself
			if (friends[i].id !== friend.id) {
				otherFriends.push(friends[i]);

				var scoreTwo = [];
				scoreTwo = friends[i].scores;

				// to find the difference in score between the newfriend and each of the existing friends
				var totalDiff = 0;
				for (var j = 0; j < scoreOne.length; j++) {
					var diff = Math.abs((scoreOne[j] - scoreTwo[j]));
					totalDiff += diff;

					//to create a totalDiff property for each of the friends and add the totalDiff value
					otherFriends[i].totalDiff = totalDiff;
				}
			}
		}
		// to Sort the otherFriends array by totalDiff to find the closest score
		otherFriends.sort(function (a, b) {
			return (a.totalDiff - b.totalDiff);
		});
		console.log(otherFriends);
		var match = otherFriends[0];
		console.log(match);
	}
}