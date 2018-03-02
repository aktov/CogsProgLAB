var data = require("../favoriterecipes.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newRecipe = {
			"name": req.query.name,
			"recipeURL": ,
			"description": req.query.description,
			"imageURL": ,
			"servings": ,
			"cookTime": 
		}

	data.favoriterecipes.push(newRecipe);
	res.render('favorites', data);
 }