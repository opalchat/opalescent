/*globals $*/

/** When Opal is ready, check login. **/
$.on('ready', function(){
                
    $.app('auth').check(function(){
                    
        if ($.me.user) {
            $.app('auth').view();
            $.app('auth').overview();
        } else  {
            $.goto('auth','signin');
        }
    
    });
                    
});

   
$.on('auth-signin-success', function(){
    
    /* Should redirect to originally requested page.  */
    console.log('works');
    $.app('auth').overview();
    
    /* Need to set Auth app icon to user's avatar. */
    
});
            

$.app("auth", {
     
     
    "router": {
        
      "signin": {
          
        "title": "Signin",
        "description": "",
        "render": function(){
            $.app('auth').pane('email-signin');
        }
         
      },
      
      "signup": {
          
        "title": "Register your account!",
        "description": "",
        "render": function(){
            $.app('auth').pane('email-signup');
        }
         
      },
      
      "signout": {
          
        "title": "Logout of Opal",
        "description": "Signout",
        "render": function(){
            $.app('auth').signout();
        }
          
      }
        
    },
    
    "types": function(){}, 
    
     
    
    "signout": function(){
        $.me.authed = false;
        $.me.auth = null;
        $.cookie('OAT1', 'null');
        $.do('auth-signout');
        $.goto('auth', 'signin');
        
    },
    
    "view": function(){
        
        if (!$.app("auth").initiated) { 
            
            $.do('auth-init');
            $.app("auth").initiated = true; 
            
         
            for(var each in $.views){
            	var item = each.split('.')[2];
            	if (each.split('.')[1]=='auth' && item!=='main'){
                    $(".portal-Auth main").append("<div id='auth_pane_" + item + "'></div>");
            	    $("#auth_pane_" + item).html($.View('apps.auth.' + item, $.me));
            	}
            }
            
        }
        
        $.app('auth').pane('loading');
        
        if ($.me.authed) $.app('auth').pane('overview');
    
    },
    
    "pane": function(which){
      
       $(".portal-Auth main > div").each(function(i,element){
          
         if (!new RegExp(which).test(element.id)) {
             
             $(element).attr('style', 'display:none');
             
         } else {
             $(element).attr('style','display:block');
             console.log('viewing: apps.auth.' + which);
             $('#' + element.id).html($.View('apps.auth.' + which, $.my));
         }
         
      });
        
    },
    
    "add": function(type, options){
        
        $.app("auth").types[type] = options;
        
    }
    
});