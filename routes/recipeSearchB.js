
/*
 * GET home page.
 */

var data = require('../recipes.json');

exports.view = function(req, res){
	console.log(data);
  res.render('recipeSearch', data);
};

exports.viewABTest = function(req, res){
	var pageView = Math.random() < 0.5
	res.render('recipeSearch', {"versionA" : pageView
	});
}	

exports.viewATest = function(req, res){
	res.render('recipeSearch', {"versionA" : true
	});
};

exports.viewBTest = function(req, res){
	res.render('recipeSearch', {"versionA" : false
	});
}