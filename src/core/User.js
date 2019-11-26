/*globals $*/
$.User = function(user_id, callback){
    
    var user = $.Users[user_id];
    
    if (!user) user = $.Users[user_id] = {expired:true, updated:(Date.now()-10000)};
    
    user.accessed = Date.now();
     
    if (user.lastupdate && Date.now()-user.lastupdate < 10000) {
            
        if(callback) callback(null, user);
            
    } else {
        
        
        user.expired = true;
        
        $.UpdateUsers(function(UpdateError){
            
            if (!UpdateError && callback) callback(null, $.Users[user_id]);
            
        });
        
    }
    
};

$.Profile = function(user_ids, callback){
    
    var ids = user_ids.split(',');
    
    
    
    
};

$.Profiles = $.Profile;