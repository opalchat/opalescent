/*globals $*/

$.app("find", {
     
    "view": function(){
        
        if (!$.app("find").initiated) {
            
            $.do('find-init');
            $.app("find").initiated = true; 
                
         
        }
         
    
    },
    
    "key": function(input){
      
      $.app('find').search(input.value);
      
      if (event.keyCode==13) {
          var first =  $('.portal-Find .results .result')[0];
          if (first) first.click();
      }
      
    },
    
    "search": function(text){
        
        if (text.trim()=='') return false;
      
      console.log('searching for ' + text);
      
      text = text.toLowerCase().trim();
      
      var rank = {
          a: [],
          b: [],
          c: []
      };
      
      
      
      /* <logic> */
      
      $.apps.forEach(function(app){
          
          if (app.id == 'find') return false;
          if (app.id == 'admin') return false;
         
         var ResultDetails = {
             "title":         "Opal App: " + app.name, 
             "id":            $.uid(),
             "icon":          app.icon,
             "description":   app.description, 
             "click":         function(){
                 $.goto(app.name);
             }
         };
         
         if (app.name.toLowerCase() == text || app.id == text) rank.a.push($.copy(ResultDetails)); 
         
         else if (RegExp('^' + text, 'i').test(app.name)) rank.c.push($.copy(ResultDetails));
         
         else if (app.tags) {
             app.tags.forEach(function(tag){
                 if (RegExp('^' + text, 'i').test(tag)) rank.c.push($.copy(ResultDetails)); 
             });
         }
         
         if (app.router) for(var path in app.router) {
             
             var route = app.router[path];
             
             if (!route.title) return false;
             ResultDetails.title = '(' + app.name + ') ' + route.title;
             ResultDetails.description = route.description;
             ResultDetails.click = function(){
                 $.goto(app.name, path);
             };
                 
             
             if (path.replace(/\//gi, '') == text) {
                 
                rank.a.push($.copy(ResultDetails));
             
             } else if (RegExp(text).test(route.title)) {
             
                rank.b.push($.copy(ResultDetails));
                 
             } else {
                 
                 route.tags.forEach(function(tag){
                     
                    if (text == tag) rank.c.push($.copy(ResultDetails));
                    
                 });
                 
             }
             
             
             
         }
         
      });
      
      
      /* </logic> */
      
      
      
      var results = [];
      for(var each in rank) rank[each].forEach(function(result){ result.class = each; results.push(result) });
      
      console.log(results);
      $(".portal-Find .results").html(''); 
      results.forEach(function(result){
        $(".portal-Find .results").append("<div class='result " + result.class + "' id='Result_" + result.id + "'>" + $.View('apps.find.result', result) + "</div>");
        $("#Result_" + result.id).on('click', result.click);
      });
        
    }
    
});