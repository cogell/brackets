var lr = require('tiny-lr');
var server = lr();

module.exports = {

  start: function(){
    server.listen(35729, function(err){
      if(err){ return console.log(err); }
    });
  },

  server: server

};