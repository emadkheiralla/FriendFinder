// name[String]
// photo[string]
// scores[Array]
function Friend(name, photo, score) {
    this.name = name;
    this.photo = photo;
    this.score = score;
};
var friendsArray = [];


function addFriend(friend) {
    friendsArray.push(friend);
};

module.exports.friendsArray = friendsArray;
module.exports.Friend = Friend;
module.exports.addFriend = addFriend;