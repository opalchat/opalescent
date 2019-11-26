/*globals $*/

// "goto" navigation router.
$.history = {

  "history": [],
  
  "back": function(){
    $.history.current--;
    var goto = $.history.history[$.history.current];
    if (goto) $.goto(goto.name, goto.path, goto.state);
  },
  
  "forward": function(){
    $.history.current++;
    var goto = $.history.history[$.history.current];
    if (goto) $.goto(goto.name, goto.path, goto.state);
  },
  
  "current": 0,
  
  "update": function(){ 
    try{
      var query = $.URItoJSON(window.location.search);
          
      console.log(query);
      $.apps.forEach(function(app){
        for(var each in query){ 
          if (each.substring(1).split('/')[0].toLowerCase() == app.name.toLowerCase()) $.goto(app.name, each.substring( each.split('/')[1].length+2 ));
        }
      });   
    } catch (e){
      console.error(e);
      $.goto('auth','signin');
    }
  }
  
};
$.goto = function(appname, path, NewState){
  
   
  var $log = $.logging('$.goto');
  $log({app:appname, path:path, NewState:NewState});
  var app = null;
  
  $.apps.forEach(function(App){
    if (App.name.toLowerCase() == appname.toLowerCase()) app = App;
  });
  
  if (!path) path = "";
  if (path.startsWith('/')) path = path.substring(1);
  
  app.path = path;
  
  var StoredState = $.cookie('AppState_' + app.name.toLowerCase());
  var state = {}; 
  try {
    state = JSON.parse(StoredState);
  } catch (e) {}
  
  if (NewState) for(var each in NewState){
    state[each] = NewState[each];
  }
  
  app.state = state;
  $.cookie('AppState_' + app.name.toLowerCase(), JSON.stringify(app.state));
  $.cookie('ActiveApp', app.name.toLowerCase());
  $.App = app;
   
   
  console.log(`
  App: ${app.name}
  Path: ${app.path}
  State: ${JSON.stringify(app.state)}
  `);
  
  var what = app.name;
  $('.nav.apps li.app').each(function(i,element){
          
    var name    = $(element).attr('data-appname'),
        id      = $(element).attr('data-appid');
       
      if (name == what || id == what) {
        $(element).attr('data-selected', 'yes');
                      
        // Save selected app to memory.
        $.memory.app = app;
                      
        // View portal.
        $.Portal.view(name, {
          main:   "apps." + name + ".main", 
          $:      $,
          app:    app
        });
                  
        $.app(app.id).view();
        
        if ($.app(app.id).router)
          
          for(var each in $.app(app.id).router) {
            
            if (app.path == each) {
              var route = $.app(app.id).router[each];
              route.render();
              if (route.title) {
                document.title = route.title;
                $('.portal [data-name="'+app.name+'"] header .text').text(route.title);
              }
              else document.title = "Opal " + app.name;
            }
            
          }  
          
        } else {
                  
          $(element).attr('data-selected', 'no');
                  
        }
                  
  });
  
  
  $.history.history.push(app);
  $.history.current = $.history.history.length-1;
   
   
  window.history.pushState('', '', $.rootPath + '?/' + app.name.toLowerCase() + (app.path?'/' + app.path:''));
  
  
};

$.clearState = function(){
  
  
  $.apps.forEach(function(app){
    $.cookie('AppState_' + app.name.toLowerCase(), '{}');
  });
};

$(document).ready(function(){
  
  
  $.on('appnav.init', function(){
    
    $.rootPath = window.location.pathname;
    
    $.history.update();
    
    $(window).on('popstate', $.history.update);
    
    
  });
 
   
});
 