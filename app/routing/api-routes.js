

// Your api-routes.js file should 
// contain two routes:
var allFriends = require('../data/friends');
//  GET route with the url /data/friends.
//  This will be used to display a
//   JSON of all possible friends.  



function getFriends(app) {
    app.get('/api/friends', function(req, res) {
        // return the friendsArray
        res.json(allFriends.friendsArray);
    });
}

function sum(a,b){
    var sum = a+b;
    return(Math.abs(sum));
}
// A POST routes /data/friends. 
// This will be used to handle incoming
//  survey results.
function postFriends(app) {
    app.post('/api/newfriend', function(req, res) {
        
        var name = req.body.name;
        var photo = req.body.photo;
        var q1 = req.body.q1 - 0;
        var q2 = req.body.q2 - 0;
        var q3 = req.body.q3 - 0;
        var q4 = req.body.q4 - 0;
        var q5 = req.body.q5 - 0;
        var q6 = req.body.q6 - 0;
        var q7 = req.body.q7 - 0;
        var q8 = req.body.q8 - 0;
        var q9 = req.body.q9 - 0;
        var q10 = req.body.q10 - 0;

        var newArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
        var score = 0;
        for (var i = 0; i < newArray.length; i++) {
            score += sum(newArray[i], newArray[i++]);
        }
        var myFriendArray = allFriends.friendsArray;
        var newfriend = new allFriends.Friend(name, photo, score);
        allFriends.addFriend(newfriend);
        console.log(allFriends.friendsArray);
        res.json(allFriends.friendsArray);
    });
}

module.exports.getFriends = getFriends;
module.exports.postFriends = postFriends;
//  
//  
//  
//  
//  
//