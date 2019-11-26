/* globals $ */

$.URItoJSON = function(url){ 
    var hash;
    var myJson = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        myJson[hash[0]] = hash[1];
        // If you want to get in native datatypes
        // myJson[hash[0]] = JSON.parse(hash[1]); 
    }
    return myJson; 
};

$.JSONtoURI = function(params){
    var queryString = Object.keys(params).map(function(key) {
        return key + '=' + params[key];
    }).join('&');
    return queryString;
};

// REQUEST
/*
 * var xhr = $.xhr({ method:'POST', url:'/server', headers:{'content-type':'text/plain'} }); 
 * xhr.set('content-type', 'image/jpeg');
 * xhr.send(null);
 */
$.xhr = function(c){
    
    var xhr = new XMLHttpRequest();
    xhr.set =  function(k,v){
        xhr.setRequestHeader(k,v);
    };
    xhr.header = xhr.header;
    xhr.open(c.method, c.url, true);
    if (c.headers) for(var each in c.headers) xhr.setRequestHeader(each, c.headers[each]);
    return xhr;
};

$.request = function(){
    
    var r = {}, arg = arguments;
    
    if (typeof arg[0] == 'object') r = arg[0];
    
    for(var each in arg) {
        if (typeof arg[each] == 'function') {
            r.callback = arg[each];
        }
    }
    
    if (!r.headers) r.headers = {};
     
    r.method = r.method.toUpperCase();
    
    if (r.json) {
      r.headers['Content-Type'] = 'application/json';
      r.body = JSON.stringify(r.json);
    }
      
    var xhr = $.xhr({
        method:     r.method,
        url:        r.url,
        headers:    r.headers
    });
    
        
    if (/^(get|delete|options)$/i.test(r.method)) {
            
        xhr.onload = function () {
          // Request finished. Do processing here.
          try {
            this.json = JSON.parse(this.response);
          }catch(e){}
          
          if (typeof r.callback == 'function') r.callback(this);
        }; 
            
        xhr.send(null);
            
    } else {
             
            
        xhr.onreadystatechange = function() { 
            // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                try {
                    this.json = JSON.parse(this.response);
                }catch(e){
                    
                }
                if (typeof r.callback == 'function') r.callback(this);
            }
        };
            
        xhr.send(r.body);
            
    }  
    
};


$.rest = function(object, query){
    
    var request = function(){
        var arg = arguments,
            callback = function(){},
            options = {};
            
        options.url = "https://beta.opalchat.com/rest/" + object + "?instance_id=opalchat&api_token=" + $.cookie('OAT1') + (typeof query=='object'?'&'+$.JSONtoURI(query):'');
        options.method = 'GET';
            
        for(var i in arg){
            if (typeof arg[i]=='function') callback = arg[i];
            if (typeof arg[i]=='string') options.method = arg[i];
            if (typeof arg[i]=='object') options.json = arg[i];
        }
        return $.request(options, function(a){
            var error = null, response = null, json = null;
            try {
                json = a.json;
                error = a.json.error;
                response = a.json.response;
            } catch (e){
                error = {message:"Could not parse response.", response:a};
            }
            callback(error, response, json);
        });
    };
    var o = {};
    ['get','post','put','delete','options'].forEach(function(i){
        o[i] = function(a,b){
            return request(i.toUpperCase(),a,b);
        };
    });
    return o;
    
};