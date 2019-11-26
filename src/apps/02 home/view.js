/*globals $*/
$.app('home', {
   
    "view": function(){
        
        if (!$.app("home").initiated) { 
            
            $.do('home-init');
            $.app("home").initiated = true; 
            
         
            for(var each in $.views){
            	var item = each.split('.')[2];
            	if (each.split('.')[1]=='home' && item!=='main'){
                    $(".portal-Debug main").append("<div id='home_pane" + item + "'></div>");
            	    $("#home_pane_" + item).html($.View('apps.home.' + item, $.me));
            	}
            }
            
                
        }
        
    }
    
});