/*globals $*/

$.plugin = function(id, desc){
  
  var plugin = null;
  
  $.plugins.forEach(function(p){
    if (p.id.toLowerCase() == id.toLowerCase()) {
        if (desc) for(var k in desc) p[k] = desc[k];
        plugin = p;
    }
  });
  

  
  return plugin;
    
};