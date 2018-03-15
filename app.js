
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
var home = require('./routes/home');
var recipeList = require('./routes/recipeList');
var recipeSearch = require('./routes/recipeSearch');
var recipeTemplate = require('./routes/recipeTemplate');
var options = require('./routes/options');
var stats = require('./routes/stats');
var questions = require('./routes/questions');
var favorites = require('./routes/favorites');
var recent = require('./routes/recent');
var profile = require('./routes/profile');
var achievements = require('./routes/achievements');

// planned meal
var create = require('./routes/create');

//routes for recipe pages
var turkeyBurger = require('./routes/turkeyBurger');
var roasted = require('./routes/roasted');
var butternut = require('./routes/butternut');
var enchiladas = require('./routes/enchiladas');
var basilShrimp = require('./routes/basilShrimp');
var couscous = require('./routes/couscous');

//routes for Version B Pages
var recipeSearchB = require('./routes/recipeSearchB');
var recipeListB = require('./routes/recipeListB');
var recipeTemplateB = require('./routes/recipeTemplateB');
var optionsB = require('./routes/optionsB');
var statsB = require('./routes/statsB');
var questionsB = require('./routes/questionsB');
var favoritesB = require('./routes/favoritesB');
var recentB = require('./routes/recentB');
var profileB = require('./routes/profileB');
var achievementsB = require('./routes/achievementsB');

//routes for recipe pages in Version B
var turkeyBurgerB = require('./routes/turkeyBurgerB');
var roastedB = require('./routes/roastedB');
var butternutB = require('./routes/butternutB');
var enchiladasB = require('./routes/enchiladasB');
var basilShrimpB = require('./routes/basilShrimpB');
var couscousB = require('./routes/couscousB');


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
app.get('/create', create.createMeal);

app.get('/recipeSearch', recipeSearch.viewABTest);
//app.get('/recipeSearch', recipeSearch.viewATest);
//app.get('/recipeSearch', recipeSearch.viewBTest);

app.get('/recipeList', recipeList.view);
app.get('/home', home.view);
app.get('/recipeTemplate', recipeTemplate.view);
app.get('/options', options.view);
app.get('/stats', stats.view);
app.get('/questions', questions.view);
app.get('/favorites', favorites.view);
app.get('/recent', recent.view);
app.get('/profile', profile.view);
app.get('/achievements', achievements.view);

//routes for recipe pages
app.get('/recipePages/turkeyBurger', turkeyBurger.view);
app.get('/recipePages/roasted', roasted.view);
app.get('/recipePages/butternut', butternut.view);
app.get('/recipePages/enchiladas', enchiladas.view);
app.get('/recipePages/basilShrimp', basilShrimp.view);
app.get('/recipePages/couscous', couscous.view);

//routes for pages in Version B
app.get('/recipeSearchB', recipeSearchB.view);
app.get('/recipeListB', recipeListB.view);
app.get('/recipeTemplateB', recipeTemplateB.view);
app.get('/optionsB', optionsB.view);
app.get('/statsB', statsB.view);
app.get('/questionsB', questionsB.view);
app.get('/favoritesB', favoritesB.view);
app.get('/recentB', recentB.view);
app.get('/profileB', profileB.view);
app.get('/achievementsB', achievementsB.view);

//routes for recipe pages
app.get('/viewsB/recipePages/turkeyBurger', turkeyBurgerB.view);
app.get('/viewsB/recipePages/roasted', roastedB.view);
app.get('/viewsB/recipePages/butternut', butternutB.view);
app.get('/viewsB/recipePages/enchiladas', enchiladasB.view);
app.get('/viewsB/recipePages/basilShrimp', basilShrimpB.view);
app.get('/viewsB/recipePages/couscous', couscousB.view);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
