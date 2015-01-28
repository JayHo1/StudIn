(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return [ HTML.HEAD("\n  ", HTML.TITLE("Studin"), "\n"), "\n", HTML.BODY("\n    ", Spacebars.include(view.lookupTemplate("yield")), "\n") ];
}));

Template.__checkName("first-page");
Template["first-page"] = new Template("Template.first-page", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "header"
  }, "\n  ", Spacebars.include(view.lookupTemplate("navbar")), "\n  ", HTML.Raw('<!-- <div class="contain">\n    <nav id="nav-main">\n        <ul>\n            <li><div class="sec-button"><a href="entreprise">Entreprise</a></div></li>\n            <li><div class="sec-button"><a href="ecole">École</a></div></li>\n            <li><div class="sec-button"><a href="">Contact</a></div></li>\n            <li><div class="sec-button"><a href="">Se Connecter</a></div></li>\n            <li><div class="main-button"><a href="">S\'inscrire</a></div></li>\n        </ul>\n    </nav>\n    <div id="nav-trigger">\n        <span>Menu</span>\n    </div>\n    <nav id="nav-mobile"></nav>\n  <div class="logo">\n    <a href="http://www.studin.fr"><img src="Images/Logooff1.png" alt="local"/></a>\n  </div>\n  </div> -->'), "\n\n  ", HTML.Raw('<div class="container">\n    <div class="row">\n      <div class="col-xs-4 col-sm-4 col-md-4 col-xs-push-4 col-sm-push-4 col-md-push-4 first-score">\n        <img id="score" src="Images/blue-score.png">\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-10 col-sm-4 col-md-8 col-xs-push-1 col-sm-push-4 col-md-push-2">\n        <h1>Première plateforme réunissant étudiants et entreprises.</h1>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-4 col-sm-4 col-md-4 col-xs-push-4 col-sm-push-4 col-md-push-4 last-score">\n        <img id="score" src="Images/blue-score.png">\n      </div>\n    </div>\n    <div class="row adp">\n      <div class="col-md-3 col-md-push-1 ad">\n        <a href="">étudiants</a>\n      </div>\n      <div class="col-md-3 col-md-push-2 ad">\n        <a href="">entreprises</a>\n      </div>\n      <div class="col-md-3 col-md-push-3 ad">\n        <a href="">écoles</a>\n      </div>\n    </div>\n  </div>'), "\n"), "\n", Spacebars.include(view.lookupTemplate("corps")), "\n", Spacebars.include(view.lookupTemplate("footer")) ];
}));

})();
