/*globals $*/

$.app("shop", { 
     
    "view": function(){
        
        $.app('shop').search('_');
        
        if (!$.app("shop").initiated) {
            
            $.do('shop-init');
            $.app("shop").initiated = true; 
                
         
        }
         
    
    },
    
    "key": function(input){
      
      $.app('shop').search(input.value);
      
      
      if (event.keyCode==13) {
          var first =  $('.portal-Shop .results .result')[0];
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
          
        
         
      });
      
      
      /* </logic> */
      
      
      
      var results = [{title:"Coming Soon!", class:"a", id:$.uid(), description:"This app is currently under construction. Check back soon!"}];
      for(var each in rank) rank[each].forEach(function(result){ result.class = each; results.push(result) });
      
      console.log(results);
      $(".portal-Shop .results").html(''); 
      results.forEach(function(result){
        $(".portal-Shop .results").append("<div class='result " + result.class + "' id='Result_" + result.id + "'>" + $.View('apps.shop.item', result) + "</div>");
        $("#Result_" + result.id).on('click', result.click);
      });
        
    }
    
});