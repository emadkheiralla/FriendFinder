// name[String]
// photo[string]
// scores[Array]
function Friend(name, photo, score) {
    this.name = name;
    this.photo_path = photo;
    this.score = score;
};
var Friend = new Friend("Emad Kheiralla", "Photo", 9);
// friendsArray
var friendsArray = [];
friendsArray.push[Friend];


function addFriend(friend) {
    friendsArray.push(friend);
};

module.exports.friendsArray = friendsArray;
module.exports.Friend = Friend;
module.exports.addFriend = addFriend;