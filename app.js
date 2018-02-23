
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
var recipeSearch = require('./routes/recipeSearch');
var recipeTemplate = require('./routes/recipeTemplate');
var options = require('./routes/options');
var stats = require('./routes/stats');
var questions = require('./routes/questions');
var favorites = require('./routes/favorites');
var recent = require('./routes/recent');

var turkeyBurger = require('./routes/turkeyBurger');
var roasted = require('./routes/roasted');

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
app.get('/recipeTemplate', recipeTemplate.view);
app.get('/options', options.view);
app.get('/stats', stats.view);
app.get('/questions', questions.view);
app.get('/favorites', favorites.view);
app.get('/recent', recent.view);

app.get('/recipePages/turkeyBurger', turkeyBurger.view);
app.get('/recipePages/roasted', roasted.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
