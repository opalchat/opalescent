/*globals $*/

$.app('auth', {
   
   "signin": function(){
       
       var $log = $.logging('auth-signin');
       
       $log('Signing in..');
       
        $.rest('auth/email').post({
            
            email:      $("#signin_emailaddress").val(),
            password:   $("#signin_password").val()
            
        }, function(error, response){
            var message = {type:'loading', text:'Please wait...'};
            if (error) {
                message = {type:'error', text:error.message};
                $.do('auth-signin-error');
            } else {
                message = {type:'success', text:'Welcome back!'};
                console.log(response);
                $.me.auth = response;
                $.me.authed = true;
                $.cookie('OAT1', response.token.token);
                $.app('auth').check(function(AuthError, Authenticated){
                    
                    if (Authenticated) $.do('auth-signin-success');
                    else $.do('auth-signin-error');
                });
            }
            $(".portal-Auth #signin .messages").html('<p class="message ' + message.type + '">' + message.text + '</p>');

        });
        
   }
   
});