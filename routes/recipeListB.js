
/*
 * GET home page.
 */

var data = require('../recipes.json');

exports.view = function(req, res){
	console.log(data);
  res.render('/viewsB/recipeList', data);
};