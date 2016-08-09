// Dependencies
// =============================================================
var bodyParser = require('body-parser');
var express = require('express');
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

htmlRoutes.getRoot(app);
htmlRoutes.getSurvey(app);
apiRoutes.getFriends(app);
apiRoutes.postFriends(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});