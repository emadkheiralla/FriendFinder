

// Your api-routes.js file should 
// contain two routes:
var allFriends = require('../data/friends');
//  GET route with the url /data/friends.
//  This will be used to display a
//   JSON of all possible friends.  



function getFriends(app) {
    console.log('im working');
    app.get('/data/friends', function(req, res) {
        // return the friendsArray
        res.json(allFriends.friendsArray);
    });
}
// A POST routes /data/friends. 
// This will be used to handle incoming
//  survey results.
function postFriends(app) {
    console.log('im working');
    app.post('/data/newfriend', function(req, res) {
        
        var answers = req.json();
        for (var i = 0; i < answers.length; i++) {
            console.log(answers[i].q1 - 0);
        }
        res.json(allFriends.friendsArray)
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