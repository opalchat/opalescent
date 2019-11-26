/* globals $ */

$.app('chat', {
    
    "chats": {},
    
    "router": {
        
        "channel": {
          
          "render": function(a){
                console.log(a);
          }
            
        },
        
        "join": {
            
            "title": "Join a Chat",
            "description": "Chat with other users in a channel.",
            "tags":  ["channel", "chat", "join", "server"],
            
            "render": function(){
                
            }
            
        },
        
        "create": {
            
            "title": "Create a Chat",
            "description": "Create your own chat channel and invite others.",
            "tags": ["create", "channel", "chat"],
            
            "render": function(){
                
            }
            
        }
        
    },
    
    "state": function(channel_id, key, value){
        
        if (!$.app('chat').state[channel_id]) $.app('chat').state[channel_id] = {};
    
        
        if (typeof key !== 'undefined') {
            // If key and value are defined, set the state.
            if (typeof value !== 'undefined') { 
                $.app('chat').state[channel_id][key] = value;
            } else {
            // If value not defined, return the state.
                return $.app('chat').state[channel_id];
            }
        // If key and value not defined, return state map.
        } else {
            return $.app('chat').state[channel_id];
        }
        
    },
    
    "channels": [
    
        {
         "name":"General",
         "id": "c1",
         "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
         "topics":[
             {"name": "General",    "id": "t1"}
         ],
        },{
         "name":"Gaming",
         "id": "c2",
         "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
         "topics":[
             {"name": "General",    "id": "t1"}
         ],
        },{
         "name":"Memes",
         "id": "c3",
         "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
         "topics":[
             {"name": "General",    "id": "t1"}
         ],
        },{
         "name":"Flirt",
         "id": "c4",
         "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
         "topics":[
             {"name": "General",    "id": "t1"}
         ],
        },{
         "name":"Off-Topic",
         "id": "c5",
         "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
         "topics":[
             {"name": "General",    "id": "t1"}
         ]
        }
        
    ],
    
    // Switch to a different chat.
    "switch": function(channel_id, topic_id){
        
        $.do('chat-channel-select', {channel_id:channel_id, topic_id:topic_id
        });

        if (!topic_id) topic_id = "t1";
        
        if (!$.me.subscribed) $.me.subscribed = {};
        
        if (!$.me.subscribed[channel_id]) {
            $.me.subscribed[channel_id] = true;
            $.rest('subscription').post({channel_id:channel_id});
            $.rest('presence').post({channel_id:channel_id, type:"channel", text:"online"},console.log);
        }
        
        console.log('channel switching to:', channel_id);
        
        $.app('chat').chosen = {"channel":channel_id, "topic":topic_id};
        
        var channel = null;
        
        $.app('chat').channels.forEach(function(c){
            if (c.id == channel_id) channel = c;
        });
        
        $.app('chat').manager.find('.chat').attr('style', 'display:none');
        $.app('chat').manager.find('.chat_' + channel_id).attr('style', 'display:block');
        
        if ( !$.app('chat').chats[channel_id] ) {
            
            $.do('chat-channel-init', {
                channel_id: channel_id, 
                channel:    channel
            });
            
            var div = document.createElement('div');
            $(div).attr('class', 'chat chat_' + channel.id);
            $(div).html($.View('apps.chat.chat', {channel:channel, my:$.my, me:$.me} ));
            div.style = "display:block";
            channel.element = div;
            $.app('chat').chats[channel_id] = channel;
            $.app('chat').chats[channel_id].userlist = {};
            $.app('chat').manager.append(div);
            
            var input =   $(div).find('.input textarea');
            
            $(input).attr('disabled', 'true');
            
            $.rest('messages', {channel_id:channel_id}).get(function(GetError, response){
               
               $.app('chat').chats[channel_id].messages = $.copy(response.messages).reverse();
               $.do('chat-history-load', {channel_id:channel_id, messages:$.copy(response.messages).reverse()});
                
            });
            
            input.on('keydown', function(evt){
                 
               
               
            });
            
            input.on('keyup', function(evt){
               
               $.app('chat').type(channel_id, evt);
                
            });
            
            $(input).removeAttr('disabled');
                
            
             $.do('chat-channel-init-done', {channel_id:channel_id, channel:channel});
            
        } 
        
        if (topic_id) {
            var topic = $.app('chat').topic(channel_id, topic_id);
            $($.app('chat').manager.find('.topic')).attr('style', 'display:none');
            $(topic.container).attr('style','display:block');
        }
        
        
        $.app('chat').showUsers();
        $.do('chat-channel-select-done', {channel_id:channel_id, topic_id:topic_id});
        
    },
    
    "channel": function(channel_id){
          
          var o = null;
          
          $.app('chat').channels.forEach(function(channel){
              
             
              if (channel_id==channel.id) {
                  channel.container = '.chat_' + channel_id;
                  o = channel;
              }
              
          });
     
        return o;
        
    },
    
    
    "topic": function(channel_id, topic_id){
             
      var channel = $.app('chat').channel(channel_id),
            t = null;

      channel.topics.forEach(function(topic){
          if (topic_id==topic.id) {
              
              if (!$(channel.container).find('#topic_' + topic.id)[0]) {
                  $(channel.container).find('.output').append('<div class="topic" id="topic_' + topic.id + '" style="display:none"></div>');
              }
              
              topic.container = channel.container + ' #topic_' + topic.id;
              t = topic;
              
          }
       });
       
       return t;
        
        
    },
    
    
    "scroll": function(channel_id) {
        
      var output = $.app('chat').manager.find('.chat_' + channel_id + ' .output')[0];
      output.scrollTop = output.scrollHeight;
        
    },
    
    "view": function(){
    

        
        var chat = $(".portal-Chat");
        
        // Define elements for frame functionality.
        $.app('chat', {
            
            frame:      chat,
            nav:        $(chat.find('nav')[0]),
            header:     $(chat.find('header')[0]),
            footer:     $(chat.find('footer')[0]),
            main:       $(chat.find('main')[0]),
            browser:    chat.find('#ChatBrowser'),
            manager:    chat.find('#ChatManager')
            
        });
        
        
        if (!$.app('chat').initiated) {
         
            console.log('Chat intiiated.');
         
            $.app('chat').initiated = Date.now();
            
            $.app('chat').channels.forEach(function(channel){
                
                var li = document.createElement('li');
                $(li).attr('data-channel', channel.id);
                $(li).on('click', function(){
                    $.app('chat').switch($(this).attr('data-channel'));
                });
                $(li).html('<label>' + channel.name + '</label>');
                var image = document.createElement('div');
                $(image).attr('class', 'image');
                $(image).append('<div style="background-image:url(' + channel.icon + ')"></div>');
                $(li).append(image);
                $.app('chat').nav.append(li);
                
            });
          
          
            $.do('chat-init');
            
        }
         
        
    },
    
    "showTopics": function(){
        $($.app('chat').manager.find('.users')).attr('style','display:none');
        $($.app('chat').manager.find('.topics')).attr('style','display:block');
    },
    
    "showUsers": function(){
        $($.app('chat').manager.find('.users')).attr('style','display:block');
        $($.app('chat').manager.find('.topics')).attr('style','display:none');
    },
    
    "parse": function(message){
       
        
        
    },
     
    
    // Handle the chat input.
    "type": function(channel_id, event){
        
        $.do('chat-channel-type', {channel_id:channel_id, event:event});
        
        
        // Defaults
        var input = $(".chat_" + channel_id).find('.input textarea');
        if (event.which == 13 && !event.shiftKey && !event.ctrlKey) {
            $.app('chat').push(
                $.app('chat').chosen.channel, 
                $.app('chat').chosen.topic, 
            {
                text: input.val()
            });
            input.val('');
        }
        
    },
    
    // Pull the chat history.
    "pull": function(channel_id, topic_id, query){
        
        // Pull History...
        var data = null;
        
        $.do('chat-channel-pull', {channel_id:channel_id, topic_id:topic_id, data:data});
    
    },
    
    // Push to chat.
    "push": function(channel_id, topic_id, data){
      
        $.do('chat-channel-push', {channel_id: channel_id, data:data});
      
        // Post and Send.
        data.tag = $.uid();
        
        data.author_id = $.me.user_id;
        $.app('chat').post(channel_id, topic_id, $.copy(data));
        $.app('chat').send(channel_id, topic_id, $.copy(data));
      
        $.do('chat-channel-push-done', {channel_id: channel_id, data:data});
      
    },
     
    // Post a message.
    "post": function(channel_id, topic_id, data){
        
        var userlist = $.app('chat').chats[channel_id].userlist;
        
        $.User(data.author_id, function(Err){
            
            if (!userlist[data.author_id]) {
                userlist[data.author_id] = $.Users[data.author_id];
                $.do('chat-channel-adduser', {channel_id:channel_id, author_id:data.author_id});
            }
            
            userlist[data.author_id].lastMessage = Date.now();
            
            var author = $.Users[data.author_id];
            
            if ($('[data-message_id="' + data.message_id + '"]')[0]) return false;
            
            if ($('[data-message_tag="' + data.tag + '"]')[0]) {
                $('[data-message_tag="' + data.tag + '"]').attr('data-received', 'true');
                return false;
            }
        
            
            $.app('chat').topic(channel_id, topic_id);
            
            var div = document.createElement('div');
            $(div).attr('data-message_id', data.message_id);
            $(div).attr('data-message_tag', data.tag);
            $.do('chat-channel-post', {channel_id:channel_id, data:data});
            div.innerHTML = author.name + ": " + data.text;
            $(".chat_" + channel_id).find('#topic_' + topic_id).append(div);
            $.do('chat-channel-post-done', {channel_id:channel_id, topic_id:topic_id, data:data});
        
            
        
       });
       
    },
    
    // Send data.
    "send": function(channel_id, topic_id, data){
         
        var payload = {
            channel_id: channel_id, 
            public:JSON.stringify({
                topic_id: topic_id,
                tag: data.tag
            }),
            text: data.text
        };
        
        $.do('chat-channel-send', payload);
        $.rest('message').post(payload, function(err, data){
            if (data.created) {
                $.do('chat-message-send-success', {sent:payload, created:data.created});
            } else $.do('chat-message-send-fail', {sent:payload, error:err||data});
        });
       
    }
    
});