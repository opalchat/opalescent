/*globals $*/

$.ContextMenu = {
 
    "menu": [],
 
    "show": function(menu){
        
        $('.nav.context')[0].style.display = 'inline-block';
        
        var MenuGen = $.View('modules.contextmenu.main', {
            
            menu:   $.ContextMenu.menu
            
        });
        
        $('.nav.context').html(MenuGen);
        
    },
    
    "hide": function(){
        $('.nav.context')[0].style.display = 'none';
    }
    
}