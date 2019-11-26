/*globals $*/

$.Appnav = {
    
    "select": function(what){
      
        what = what.toLowerCase();
      
        $.goto(what);
        
    },
    
    "check": function(app){
      
      var access = true;
      
      
      if (app.access) {
          app.access.forEach(function(rule){
             for(var each in rule){
                 if ($.me[each] !== rule[each]) access = false;
             }
          });
      }
      
      if (access) $('.nav.apps li.app[data-appid="' + app.id + '"]').attr('style', 'display:block');
      else $('.nav.apps li.app[data-appid="' + app.id + '"]').attr('style', 'display:none');
        
    },
    
    "init": function(){
        
        $('.nav.apps').html($.View('modules.apps.main', {$:$}));
        
        $('.nav.apps li.app').each(function(i,element){ 
            $(element).attr('style','display:none');
            $(element).on('click', function(){
               $.Appnav.select($(this).attr('data-appname')); 
            });
        });
        
        $.do('appnav.init');
        
        setInterval(function(){
            $.apps.forEach(function(app){
                $.Appnav.check(app);
            });
        },1000);
        
    }
    
};