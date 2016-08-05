// Your html-routes.js file 
// should include two routes:
var path = require('path');
// A default USE route that leads
// to home.html which displays the home page.
//   write a function to export

function getRoot(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'home.html'))
    });
}
// A GET Route to /survey which
//  should display the survey page.
function getSurvey(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'survey.html'))
    });
}
module.exports.getRoot = getRoot;
module.exports.getSurvey = getSurvey;