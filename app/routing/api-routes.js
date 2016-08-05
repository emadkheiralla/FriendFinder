

// Your api-routes.js file should 
// contain two routes:
var allFriends = require('../data/friends');
//  GET route with the url /api/friends.
//  This will be used to display a
//   JSON of all possible friends.  



function getFriends(app) {
    console.log('im working');
    app.get('/api/friends', function(req, res) {
        // return the friendsArray
        res.json(allFriends.friendsArray);
    });
}
// A POST routes /api/friends. 
// This will be used to handle incoming
//  survey results.
function postFriends(app) {
    console.log('im working');
    app.post('/api/friends', function(req, res) {
        // get survey answers from req
        // make a new 

        // function handleReq()
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