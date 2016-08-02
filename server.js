var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	// res.send('Welcome to the Star Wars Page!')
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/pokemon/', function (req, res) {
	var chosen = req.params.pokemon;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < pokemon.length; i++) {
			if (chosen === pokemon[i].routeName) {
				res.json(pokemon[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(pokemon);
	}
});

app.get('/api/pokemon/:index/', function (req, res) {
	var chosen = req.params.pokemon;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < pokemon.length; i++) {
			if (chosen === pokemon[i].routeName) {
				res.json(pokemon[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(pokemon);
	}
});

// Create New Characters - takes in JSON input
app.post('/api/pokemon/', function (req, res) {
	// req.body hosts is equal to the JSON post sent from the user
	var newpokemon = req.body;

	console.log(newpokemon);

	// We then add the json the user sent to the character array
	characters.push(newpokemon);

	// We then display the JSON to the users
	res.json(newpokemon);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});