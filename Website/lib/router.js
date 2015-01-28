Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/entreprise', function(){
	this.render('entreprise');
});

Router.route('/', function(){
	this.render('first-page');
});

Router.route('/ecole', function(){
	this.render('ecole');
});

Router.route('/etudiant', function(){
	this.render('student-page');
});

Router.route('/contact', function(){
	this.render('contact-page');
});