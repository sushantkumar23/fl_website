module.exports = function(app) {

	// main login page //
	
	app.get('/', function (req, res){
		res.render('home');
	});
}