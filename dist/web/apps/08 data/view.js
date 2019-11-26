/*globals $*/
$.app('data', {
   
   
    "view": function(){
        
        if (!$.app("data").initiated) { 
            
            $.do('data-init');
            $.app("data").initiated = true; 
            
         
            for(var each in $.views){
            	var item = each.split('.')[2];
            	if (each.split('.')[1]=='data' && item!=='main'){
                    $(".portal-Data main").append("<div id='data_pane_" + item + "'></div>");
            	    $("#auth_pane_" + item).html($.View('apps.data.' + item, $.me));
            	}
            }
            
        }
        
        $.app('data').pane('loading');
    
    }
    
});