var data = require("../plannedMeals.json");

exports.createMeal = function(req, res) {    
	// Your code goes here
	var newMeal = {
			"name": req.query.customRecipe,
			//"meals": 
		}

	data.recipes.push(newMeal);
	console.log(data);
	res.render('home', data);
 }