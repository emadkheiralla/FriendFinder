

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
        var body = JSON.stringify(req.body);
        console.log(body);
        // var name = req.body.name;
        // var photo = req.body.photo;
        // var q1 = req.body.q1;
        // var q2 = req.body.q2;
        // var q3 = req.body.q3;
        // var q4 = req.body.q4;
        // var q5 = req.body.q5;
        // var q6 = req.body.q6;
        // var q7 = req.body.q7;
        // var q8 = req.body.q8;
        // var q9 = req.body.q9;
        // var q10 = req.body.q10;

        // var newArray = [q1-0, q2-0, q3-0, q4-0, q5-0, q6-0, q7-0, q8-0, q9-0];
        // for (var i = 0; i < newArray.length; i++) {
        //     var score = sum(newArray[i], newArray[i++]);
        // }
        // var newfriend = new allFriends.Friend(name, photo, sum);
        // allFriends.addFriend(newfriend);
        // console.log(allFriends.friendsArray);

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