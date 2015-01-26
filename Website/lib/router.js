Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/entreprises', function(){
	this.render('entreprise');
});

Router.route('/', function(){
	this.render('first-page');
});