/*globals $*/

/* LISTEN FOR MESSAGES */
$.on('ws-message', function(event, data){
   
   if (!data.message || !data.message.message_id) return false;
   
   var message_id = data.message.message_id;
   var channel_id = data.message.channel_id;
   var topic_id = null;
   var public = data.message.public[data.message.author_id];
   
   
   $.app('chat').chats[channel_id].messages.push(data.message.public);
   if ($.app('chat').chats[channel_id].messages.length>10000) $.app('chat').chats[channel_id].messages.splice(0,1);
   
   try {
       var pub = JSON.parse(public);
       topic_id = pub.topic_id;
       data.message.tag = pub.tag;
   } catch (e) {}
   
   $.app('chat').post(channel_id, topic_id, data.message);
    
});

// When chat initializes, go to default channel and topic.
$.on('chat-init', function(event){
   
   $.app('chat').switch('c1','t1');
   $.app('chat').showUsers();
    
});


$.on('chat-history-load', function(event, data){
    
   var channel_id = data.channel_id;
   data.messages.forEach(function(message){
       
      var topic_id = null;
      var public = message.public[message.author_id];
       
       
       $.app('chat').chats[channel_id].messages.push(message.public);
       if ($.app('chat').chats[channel_id].messages.length>10000) $.app('chat').chats[channel_id].messages.splice(0,1);
       
       try {
           var pub = JSON.parse(public);
           topic_id = pub.topic_id;
       } catch (e) {}
       
       $.app('chat').post(channel_id, topic_id, message);
       
       
   });
   
});


$.on('presence-channel', function(event, data){
    
    if (!$.app('chat').chats[data.channel_id]) return false;
    
    var userlist = $.app('chat').chats[data.channel_id].userlist;
        
    if (data.text == 'online'){
        $.User(data.user_id, function(){
            
            if (!userlist[data.user_id]){
                
                userlist[data.user_id] = $.copy($.Users[data.user_id]);
                
                userlist[data.user_id].joined = Date.now();
                $.do('chat-channel-adduser', data);
                
            }
           
        });
    }
    
    
});

$.on('chat-channel-post-done', function(event, data){
   
   $.do('chat-channel-updateusers', data);
   $.app('chat').scroll(data.channel_id);
    
});


$.on('chat-channel-adduser', function(event, data){
   
   console.log('adding user:', data.user_id);
   $.do('chat-channel-updateusers', data);
    
});



$.on('chat-channel-deluser', function(event, data){
   
   console.log('deleting user:', data.user_id);
   $.do('chat-channel-updateusers', data);
    
});

$.on('chat-channel-updateusers', function(event, data){
    
    console.log('updating users');
   
   if(!$.app('chat').chats[data.channel_id]) return false;
   
   var userlist = $.app('chat').chats[data.channel_id].userlist;
   
   var list = $.app('chat').manager.find('.chat_' + data.channel_id + ' .users');
   
   var map = {};
   var keys = [];
   
   for(var user_id1 in userlist) {
       var user = userlist[user_id1];
       var key = user.lastMessage + "_" + user_id1;
       keys.push(key);
       map[key] = user;
   }
   
   keys = keys.sort().reverse();
   
   
   $(list).html('');
    keys.forEach(function(key){
       var user = map[key];
       $(list).append('<li>'+user.name+'</li>');
   });
    

});

$.on('chat-channel-select-done', function(event, data){
   $.app('chat').scroll(data.channel_id); 
});

$.on('user-offline', function(event,data){
    
    console.log('user went offline:', data);
   
   for(var channel_id in $.app('chat').chats){
       
       var chat = $.app('chat').chats[channel_id];
       
       if (chat.userlist && chat.userlist[data.user_id]) {
           
           var user = chat.userlist[data.user_id];
           user.channel_id = channel_id;
           var userCopy = $.copy(user);
           delete chat.userlist[data.user_id];
           $.do('chat-channel-deluser', userCopy);
           
       }
       
       
   }
   
});