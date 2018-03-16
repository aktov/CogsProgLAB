var data = require("../plannedMeals.json");

exports.createMeal = function(req, res) {    
	// Your code goes here
	var newMeal = {
			"name": req.query.customRecipe,
			"meals": req.param('amt')
		}

	data.recipes.push(newMeal);
	console.log(data);
	res.render('home', data);
 }