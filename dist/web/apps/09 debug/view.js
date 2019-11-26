/*globals $*/
$.app('debug', {
   
    "view": function(){
        
        if (!$.app("debug").initiated) { 
            
            $.do('debug-init');
            $.app("debug").initiated = true; 
            
         
            for(var each in $.views){
            	var item = each.split('.')[2];
            	if (each.split('.')[1]=='debug' && item!=='main'){
                    $(".portal-Debug main").append("<div id='debug_pane_" + item + "'></div>");
            	    $("#debug_pane_" + item).html($.View('apps.debug.' + item, $.me));
            	}
            }
            
                
        }
        
    }
    
});