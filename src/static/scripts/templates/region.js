define(["handlebars"],function(){

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 class=\"region-title\">";
  if (stack1 = helpers['region-title']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['region-title']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n<div class=\"round round2\">\n	<h2 class=\"round-title\">2nd Round</h2>\n	<h2 class=\"round-date\">March 20-21</h2>\n</div>\n<div class=\"round round3\">\n<h2 class=\"round-title\">3rd Round</h2>\n	<h2 class=\"round-date\">March 22-23</h2>\n</div>\n<div class=\"round round4\">\n	<h2 class=\"round-title\">Regional Semis</h2>\n	<h2 class=\"round-date\">March 27-28</h2>\n</div>\n<div class=\"round round5\">\n	<h2 class=\"round-title\">Regional Finals</h2>\n	<h2 class=\"round-date\">March 29-30</h2>\n</div>\n<div class=\"round round6\">\n	<h2 class=\"round-title\">National Semis</h2>\n	<h2 class=\"round-date\">April 5</h2>\n</div>\n<div class=\"round round7\">\n	<h2 class=\"round-title\">National Championship</h2>\n	<h2 class=\"round-date\">April 7</h2>\n</div>";
  return buffer;
  });

});
