
/*
 * GET home page.
 */

var data = require('../favoriterecipes.json');

exports.view = function(req, res){
	//console.log(data);
  res.render('favoritesB', data);
};