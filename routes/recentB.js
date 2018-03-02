
/*
 * GET home page.
 */

 var data = require('../recentrecipes.json');

exports.view = function(req, res){
  res.render('recent', data);
};