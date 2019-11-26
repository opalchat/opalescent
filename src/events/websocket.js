/*globals $*/

/* LISTEN FOR PRESENCE */
$.on('ws-message', function(event, data){
   
   if (data.presence) $.do('presence', data.presence);
   
  if (data.type) {
      if (data.type == 'connection' && data.method == 'open') $.do('user-online', data);
      if (data.type == 'connection' && data.method == 'close') $.do('user-offline', data);
  }
});


$.on('presence', function(event, data){
   
   console.log('PRESENCE:', data);
   $.do('presence-'+data.type, data);
    
});
