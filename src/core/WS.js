/* globals $ */
 
$.socket = function(){
    
    
    var c = {}, arg = arguments;
    
    if (typeof arg[0] == 'object') c = arg[0];
    
    if (!c.url) {
        if (!c.host) throw Error("'url' or 'host' need to be defined.");
        c.url = "ws" + (c.secure?'s':'')
        + '://' + c.host + '/' + (c.path||'');
    }
    

    if (!$.socket.supported()) throw Error('WebSockets not supported by this browser.');

    var sock = $.copy(c);
    
    // WebSocket
    sock.method = 'WebSocket';
    
    sock.open = function(){
        if (this.method == 'WebSocket') {
            if (this.ws) this.close();
            this.ws = new WebSocket(c.url);
            this.ws.onopen      = c.open    ||  function(){};
            this.ws.onclose     = c.close   ||  function(){};
            this.ws.onerror     = c.error   ||  function(){};
            this.ws.onmessage   = c.message ||  function(){};
        }
    };
    
    sock.close = function(){ 
        if (this.method == 'WebSocket') {
            this.ws.close();
            delete this.ws;
        }
    };
    
    sock.send = function(data){
        if (this.method == 'WebSocket'){
            if (typeof data == 'object') this.ws.send(JSON.stringify(data));
            else this.ws.send(data);
        }
    };
    
    return sock;

};

$.socket.supported = function(){
    
    return ("WebSocket" in window);
    
};