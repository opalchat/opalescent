/*globals $*/
$.on('auth-signin-success', function(){
   console.log('!!! connecting to socket...');
   var sock = $.ws = $.socket({
       host:'beta.opalchat.com', 
       secure:true, 
       open:function(){
            $.do('ws-open');
       }, 
       close:function(){
            $.do('ws-close');
       },
       message:function(event){
           var data = JSON.parse(event.data);
            $.do('ws-message', data);
       }, 
       path:"ws?instance_id=opalchat&api_token="+$.me.auth.token
   });
   sock.open();
});