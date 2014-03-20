define(["handlebars"],function(){

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"close\">\n	<span class=\"ic icon-stop\"></span>\n	<span class=\"ic icon-close\"></span>\n</div>\n\n<div class=\"hpc-header\">\n	<div class=\"team1\">\n		<div class=\"topLock\">\n			<span class=\"seed\">";
  if (stack1 = helpers['team1-seed']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['team1-seed']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			<span class=\"name\">";
  if (stack1 = helpers['team1-name']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['team1-name']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		</div>\n		<h2 class=\"score\">";
  if (stack1 = helpers['team1-total-score']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['team1-total-score']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	</div>\n\n	<div class=\"team2\">\n		<div class=\"topLock\">\n			<span class=\"seed\">";
  if (stack1 = helpers['team2-seed']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['team2-seed']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			<span class=\"name\">";
  if (stack1 = helpers['team2-name']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['team2-name']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		</div>\n		<h2 class=\"score\">";
  if (stack1 = helpers['team2-total-score']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['team2-total-score']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	</div>\n</div>\n\n<div class=\"recap\">\n	<h2 class=\"title\">Recap</h2>\n	<p class=\"text\">";
  if (stack1 = helpers['match-summary']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['match-summary']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n\n<div class=\"chart\"></div>\n\n<div class=\"notable\">\n	<div class=\"badge-wrapper\">\n		<div class=\"badge ";
  if (stack1 = helpers['match-badge']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['match-badge']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n		<!-- <img src=\"/images/badges/Blowout.svg\" alt=\"\"> -->\n	</div>\n	<div class=\"badgeText\">\n		<h2 class=\"title\">";
  if (stack1 = helpers['match-badge']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['match-badge']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n		<p class=\"text\">";
  if (stack1 = helpers['match-badge-summary']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['match-badge-summary']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n	</div>\n</div>\n\n<div class=\"continue\">\n	<a class=\"text\" href=\"";
  if (stack1 = helpers['match-post-link']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['match-post-link']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Continue Reading ›</a>\n</div>";
  return buffer;
  });

});
