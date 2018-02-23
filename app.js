
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// Example route
// var user = require('./routes/user');
var index = require('./routes/index');
var recipeList = require('./routes/recipeList');
var recipeSearch = require('./routes/recipeSearch');
var recipeTemplate = require('./routes/recipeTemplate');
var options = require('./routes/options');
var stats = require('./routes/stats');
var questions = require('./routes/questions');
var favorites = require('./routes/favorites');
var recent = require('./routes/recent');

//routes for recipe pages
var turkeyBurger = require('./routes/turkeyBurger');
var roasted = require('./routes/roasted');
var butternut = require('./routes/butternut');
var enchiladas = require('./routes/enchiladas');
var basilShrimp = require('./routes/basilShrimp');
var couscous = require('./routes/couscous');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Example route
// app.get('/users', user.list);
app.get('/', index.view);
app.get('/recipeSearch', recipeSearch.view);
app.get('/recipeList', recipeList.view);
app.get('/recipeTemplate', recipeTemplate.view);
app.get('/options', options.view);
app.get('/stats', stats.view);
app.get('/questions', questions.view);
app.get('/favorites', favorites.view);
app.get('/recent', recent.view);

//routes for recipe pages
app.get('/recipePages/turkeyBurger', turkeyBurger.view);
app.get('/recipePages/roasted', roasted.view);
app.get('/recipePages/butternut', butternut.view);
app.get('/recipePages/enchiladas', enchiladas.view);
app.get('/recipePages/basilShrimp', basilShrimp.view);
app.get('/recipePages/couscous', couscous.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
