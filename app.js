var express = require('express'),
	mongoose = require('mongoose'),
	nunjucks = require('nunjucks'),
	multer = require('multer');

mongoose.connect('mongodb://localhost:27017/pokedex',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée !', error));


var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use ('/', require('./routes/pokemon'));
//app.use ('/types', require('./routes/types'));

nunjucks.configure('views',{
	autoescape : true,
	express: app
});// to configure nunjucks

console.log('Server started succesfully');
app.listen(8080);