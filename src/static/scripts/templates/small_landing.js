define(["handlebars"],function(){

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<div class=\"title-wrapper\">\n		<h1 class=\"title fittext\">NCAA 2014 Tournament</h1>\n	</div>\n	<div class=\"social\">\n		<div class=\"fb-wrapper\">\n			<div class=\"facebook\"></div>\n		</div>\n		<div class=\"twit-wrapper\">\n			<div class=\"twitter\"></div>\n		</div>\n	</div>\n</header>\n<div class=\"smallBracket\">\n\n	<div class=\"top\">\n		<div class=\"region midwest\" data-region=\"midwest\">\n			<span>Midwest</span>\n		</div>\n		<div class=\"region south\" data-region=\"south\">\n			<span>South</span>\n		</div>\n	</div>\n	<div class=\"region finals\" data-region=\"finals\">\n		<span>Finals</span>\n	</div>\n	<div class=\"bottom\">\n		<div class=\"region west\" data-region=\"west\">\n			<span>West</span>\n		</div>\n		<div class=\"region east\" data-region=\"east\">\n			<span>East</span>\n		</div>\n	</div>\n\n</div>";
  });

});
