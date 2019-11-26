/*globals $*/

$.app = function(id, desc){
  
  var app = null;
  
  $.apps.forEach(function(p){
    if (p.id.toLowerCase() == id.toLowerCase()) {
        if (desc) for(var k in desc) p[k] = desc[k];
        app = p;
    }
  });
  
  if (!app.view) app.view = function(){};
  
  app.extend = function(key, value) {
    app[key] = value;
  };
  
  return app;
    
};