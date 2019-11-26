/*globals $*/
$.app('auth', {

    "check": function(callback){
       
       var $log = $.logging('auth-check');
       $log('Checking auth...');
       
       $.rest('user').get(function(a,b,c){
           $log('Auth check returned.', c);
           var firsttime = false;
           if (!$.me.authed) firsttime = true;
            if (!c.identity || !c.identity.user) {
                $.me.authed = false;
                $.me.auth = null;
                $.do('auth-lost');
                callback(true);
            } else {
                $.me.authed = true;
                $.me.auth = {token:$.cookie('OAT1')};
                var user = c.identity.user;
                for (var e1 in c.identity) $.my[e1] = $.me[e1] = c.identity[e1];
                for (var e2 in user) $.my[e2] = $.me[e2] = user[e2];
                
                if (firsttime) $.do('auth-signin-success');
                callback(null, c.identity);
            }
        });  
    }
    
});