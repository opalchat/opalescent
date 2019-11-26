/*globals $*/

$.app("gems", {
     
    "view": function(){
        
        if (!$.app("gems").initiated) {
            
            $.do('gems-init');
            $.app("gems").initiated = true; 
                
         
        }
         
    
    }
    
});