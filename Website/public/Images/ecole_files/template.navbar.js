(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.Raw('<nav class="navbar navbar-inverse navbar-fixed-top">\n		<div class="row">\n			<div class="col-lg-3 col-lg-push-2">\n				<div class="navbar-header">\n				    <a class="navbar-brand" href="#"><img src="Images/Logooff1.png"></a>\n				    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n				      <span class="icon-bar"></span>\n				      <span class="icon-bar"></span>\n				      <span class="icon-bar"></span>\n				    </button>\n				</div>\n			</div>\n			<div class="col-md-9 col-lg-6 col-lg-push-1">\n				<div class="navbar-collapse collapse">\n				    <ul class="nav navbar-nav">\n				      <li><a class="sec-button" href="http://www.studin.fr">Accueil</a></li>\n				      <li><a class="sec-button" href="entreprise">Entreprise</a></li>\n				      <li><a class="sec-button" href="ecole">École</a></li>\n				      <li><a class="sec-button" href="">Contact</a></li>\n				      <li><a class="sec-button" href="">Se Connecter</a></li>\n				      <li><div class="main-button1"><a href="">S\'incrire</a></div></li>\n				    </ul>\n				</div>\n			</div>\n		</div>\n	</nav>');
}));

})();
