/*globals $*/
var $log = $.logging('Portal');

/*
 * $.Portal.view('home', {
    header:{template:"apps.home.header", state:{}};
    content:{}
    
 });
 *
 */


$.Portal = {
    version:"1.0",
    views: {},    
    init: function(){
      
       $.do('ready');
       
    },
    view: function(name, config){
        
        $(".portal-content > div").attr('data-selected', 'no');
        
        if (!$.Portal.views[name]) {
            var div = document.createElement('div');
            $(div).attr('data-name', name);
            $(div).attr('data-config', JSON.stringify(config));
            div.className = "app view portal-" + name;
            $('.portal-content').append(div);
        }
        
        $log('Viewing ' + name + ' (' + config.main + ')');
        
        $.Portal.views[name] = config;
        
        $(".portal-content [data-name='" + name + "']").attr('data-selected', 'yes');
        
        if ( $.app(name).initiated ) return false;
        
        var render = $.View(config.main, config);
        $(".portal-content [data-name='" + name + "']").html(render);
        
    }
};

