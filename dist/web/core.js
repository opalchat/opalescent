/*
 * OPAL JAVASCRIPT (Compiled)
 * [Lines] - Old: 920  New: 443
 * [Chars] - Old: 20042  New: 14928
 */
 
/*globals $*/
$.EventReference = {
    
    "": ""
    
};
 
$.OpalEvents = {};


$.do = function(event, data){
   if (!$.OpalEvents[event]){ 
       
       $.OpalEvents[event] = {
           calls: 1, 
           listening: 0,
           description: $.EventReference[event]
       };
       
   } else $.OpalEvents[event].calls++;
   return $(document).trigger(event,data);
};

$.on = function(event, func){
   if (!$.OpalEvents[event]){ 
       $.OpalEvents[event] = {
           calls: 0, 
           listening: 1,
           description: $.EventReference[event]
       };
       
   } else $.OpalEvents[event].listening++;
   return $(document).on(event, func);
};
 
 // Cookies
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});
$.cookie = Cookies;
 
(function(){

$.app = function(id, desc){ var app = null; $.apps.forEach(function(p){
 if (p.id.toLowerCase() == id.toLowerCase()) {
  if (desc) for(var k in desc) p[k] = desc[k];
  app = p;
 }
 }); if (!app.view) app.view = function(){}; app.extend = function(key, value) {
 app[key] = value;
 }; return app;};})();
(function(){$.Cache = function(){ var Set = {}; if (typeof arguments[0] == 'object') Set = arguments[0]; Set.data = {}; 
 return Set;};

})();
(function(){

$.chain = function(how, ops, callback){};

$.chain.paralell = function(ops, callback){};


$.chain.linear = function(ops, callback) {};})();
(function(){

$.alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

$.encoding = {};

$.encode = function(type, what){
 var encoding = $.encoding[type];
 if (typeof encoding == 'object') 
  return encoding.encode(what);
 else {
  throw Error('Encoding type "' + type + '" is not supported.'); 
 }
};
$.decode = function(type, what){
 var encoding = $.encoding[type];
 if (typeof encoding == 'object') 
  return encoding.decode(what);
 else {
  throw Error('Encoding type "' + type + '" is not supported.'); 
 }
};

$.encoding.A100 = {

};})();
(function(){
$.Objects = [];
$o = $.Object = function(name, config){
 $.Objects.forEach(function(o){
  var what;
  if (name.toLowerCase() == o.name.toLowerCase()) what = o;
  return what;
 });
};
$.Object.create = function(name, config){
 if (typeof config == 'object') {
  config.name = name;
  $.Objects.push({config:config});
 }
};})();
(function(){$.Object.create("Asset", { });})();
(function(){$.Object.create("Channel", { });})();
(function(){$.Object.create("Chat", { });})();
(function(){$.Object.create("Chat", { });})();
(function(){$.Object.create("Message", { });})();
(function(){$.Object.create("Presence", { });})();
(function(){$.Object.create("Project", { });})();
(function(){$.Object.create("Role", { });})();
(function(){$.Object.create("Skill", { });})();
(function(){$.Object.create("Task", { });})();
(function(){$.Object.create("User", { });})();
(function(){$.Object.create("Work", { });})();
(function(){

$.plugin = function(id, desc){ var plugin = null; $.plugins.forEach(function(p){
 if (p.id.toLowerCase() == id.toLowerCase()) {
  if (desc) for(var k in desc) p[k] = desc[k];
  plugin = p;
 }
 }); return plugin;};})();
(function(){





$.Queue = function(qid){ 
 if ( !$.queue.queues ) $.queue.queues = {}; 
 if (qid) return $.queue.queues[qid]; var id = $.uid(), 
  a = (arguments[0] || {}),
  Q = {  "timeout":  a.timeout || 5000,
  "expiration": a.expiration || 30000,
  "interval": a.interval || 1000,  "id":   id,
  "queue":  [],  "add": function(details){   var d = {};   if (typeof details == 'object') d = details;
   if (typeof details == 'function') d.operation = details;   d.added = Date.now();   if (!d.operation) throw Error('Missing operation parameter.');   Q.queue.push(d);
   $(Q).trigger('queue-task-add', d);   return Q.queue[Q.queue.length-1];  },  "tick": function(){  
   var t = Q.queue[0];   if (!t) return $(Q).trigger('queue-empty');   if (t.busy) return false;   t.busy = Date.now();
   t.done = function(type){
    return (function(result){
    if (t.cancelled) return false;
    t.status = result;
    t.complete = Date.now();
    $(Q).trigger('queue-task-' + type, t);
    console.info("Task " + type + " in queue " + id + ": ", {task:t});
    });
   };   if ((Date.now() - t.added) >= (t.expiration || Q.expiration)) return t.done('expire')();   t.operation(
    t.done('resolve'), 
    t.done('reject')
   );  } }; Q.worker = new Worker('worker.js'); $.queue.queues[id] = Q;
 $(Q).trigger('start'); var i = Q.add;
 for(var each in Q) i[each] = Q[each];
 return i;};})();
(function(){

$.URItoJSON = function(url){ 
 var hash;
 var myJson = {};
 var hashes = url.slice(url.indexOf('?') + 1).split('&');
 for (var i = 0; i < hashes.length; i++) {
  hash = hashes[i].split('=');
  myJson[hash[0]] = hash[1];  
 }
 return myJson; 
};

$.JSONtoURI = function(params){
 var queryString = Object.keys(params).map(function(key) {
  return key + '=' + params[key];
 }).join('&');
 return queryString;
};



$.xhr = function(c){ var xhr = new XMLHttpRequest();
 xhr.set = function(k,v){
  xhr.setRequestHeader(k,v);
 };
 xhr.header = xhr.header;
 xhr.open(c.method, c.url, true);
 if (c.headers) for(var each in c.headers) xhr.setRequestHeader(each, c.headers[each]);
 return xhr;
};

$.request = function(){ var r = {}, arg = arguments; if (typeof arg[0] == 'object') r = arg[0]; for(var each in arg) {
  if (typeof arg[each] == 'function') {
   r.callback = arg[each];
  }
 } if (!r.headers) r.headers = {}; r.method = r.method.toUpperCase(); if (r.json) {
  r.headers['Content-Type'] = 'application/json';
  r.body = JSON.stringify(r.json);
 } var xhr = $.xhr({
  method: r.method,
  url:  r.url,
  headers: r.headers
 });  
 if (/^(get|delete|options)$/i.test(r.method)) {  xhr.onload = function () {  try {
   this.json = JSON.parse(this.response);
  }catch(e){}  if (typeof r.callback == 'function') r.callback(this);
  };   xhr.send(null); } else {   
  xhr.onreadystatechange = function() {    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    try {
    this.json = JSON.parse(this.response);
    }catch(e){    }
    if (typeof r.callback == 'function') r.callback(this);
   }
  };  xhr.send(r.body); } };


$.rest = function(object, query){ var request = function(){
  var arg = arguments,
   callback = function(){},
   options = {};  options.url = "https://beta.opalchat.com/rest/" + object + "?instance_id=opalchat&api_token=" + $.cookie('OAT1') + (typeof query=='object'?'&'+$.JSONtoURI(query):'');
  options.method = 'GET';  for(var i in arg){
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
 return o;};})();
(function(){


$.history = {

 "history": [], "back": function(){
 $.history.current--;
 var goto = $.history.history[$.history.current];
 if (goto) $.goto(goto.name, goto.path, goto.state);
 }, "forward": function(){
 $.history.current++;
 var goto = $.history.history[$.history.current];
 if (goto) $.goto(goto.name, goto.path, goto.state);
 }, "current": 0, "update": function(){ 
 try{
  var query = $.URItoJSON(window.location.search);  console.log(query);
  $.apps.forEach(function(app){
  for(var each in query){ 
  if (each.substring(1).split('/')[0].toLowerCase() == app.name.toLowerCase()) $.goto(app.name, each.substring( each.split('/')[1].length+2 ));
  }
  }); 
 } catch (e){
  console.error(e);
  $.goto('auth','signin');
 }
 }};
$.goto = function(appname, path, NewState){ 
 var $log = $.logging('$.goto');
 $log({app:appname, path:path, NewState:NewState});
 var app = null; $.apps.forEach(function(App){
 if (App.name.toLowerCase() == appname.toLowerCase()) app = App;
 }); if (!path) path = "";
 if (path.startsWith('/')) path = path.substring(1); app.path = path; var StoredState = $.cookie('AppState_' + app.name.toLowerCase());
 var state = {}; 
 try {
 state = JSON.parse(StoredState);
 } catch (e) {} if (NewState) for(var each in NewState){
 state[each] = NewState[each];
 } app.state = state;
 $.cookie('AppState_' + app.name.toLowerCase(), JSON.stringify(app.state));
 $.cookie('ActiveApp', app.name.toLowerCase());
 $.App = app; 
 console.log(`
 App: ${app.name}
 Path: ${app.path}
 State: ${JSON.stringify(app.state)}
 `); var what = app.name;
 $('.nav.apps li.app').each(function(i,element){ var name = $(element).attr('data-appname'),
  id  = $(element).attr('data-appid');  if (name == what || id == what) {
  $(element).attr('data-selected', 'yes');  
  $.memory.app = app;  
  $.Portal.view(name, {
  main: "apps." + name + ".main", 
  $:  $,
  app: app
  });  $.app(app.id).view();  if ($.app(app.id).router)  for(var each in $.app(app.id).router) {   if (app.path == each) {
   var route = $.app(app.id).router[each];
   route.render();
   if (route.title) {
    document.title = route.title;
    $('.portal [data-name="'+app.name+'"] header .text').text(route.title);
   }
   else document.title = "Opal " + app.name;
   }  }   } else {  $(element).attr('data-selected', 'no');  } }); 
 $.history.history.push(app);
 $.history.current = $.history.history.length-1; 
 window.history.pushState('', '', $.rootPath + '?/' + app.name.toLowerCase() + (app.path?'/' + app.path:'')); 
};

$.clearState = function(){ 
 $.apps.forEach(function(app){
 $.cookie('AppState_' + app.name.toLowerCase(), '{}');
 });
};

$(document).ready(function(){ 
 $.on('appnav.init', function(){ $.rootPath = window.location.pathname; $.history.update(); $(window).on('popstate', $.history.update); 
 }); 
});
 })();
(function(){
$.User = function(user_id, callback){ var user = $.Users[user_id]; if (!user) user = $.Users[user_id] = {expired:true, updated:(Date.now()-10000)}; user.accessed = Date.now(); if (user.lastupdate && Date.now()-user.lastupdate < 10000) {  if(callback) callback(null, user); } else {  
  user.expired = true;  $.UpdateUsers(function(UpdateError){   if (!UpdateError && callback) callback(null, $.Users[user_id]);  }); }};

$.Profile = function(user_ids, callback){ var ids = user_ids.split(',');  
};

$.Profiles = $.Profile;})();
(function(){
$.View = function(name, props){
 props.my = $.me;
 props.instance = $.instance;
 var v = null;
 for (var view in $.views){ 
  if (name.toLowerCase() == view.toLowerCase()) v = $.views[view];
 };
 if (v) {
  return $.ejs.render(v.replace(/\{\{/gi, '<%').replace(/\}\}/gi, '%>'), props);
 }
}})();
(function(){$.socket = function(){ 
 var c = {}, arg = arguments; if (typeof arg[0] == 'object') c = arg[0]; if (!c.url) {
  if (!c.host) throw Error("'url' or 'host' need to be defined.");
  c.url = "ws" + (c.secure?'s':'')
  + '://' + c.host + '/' + (c.path||'');
 }
 if (!$.socket.supported()) throw Error('WebSockets not supported by this browser.');

 var sock = $.copy(c); 
 sock.method = 'WebSocket'; sock.open = function(){
  if (this.method == 'WebSocket') {
   if (this.ws) this.close();
   this.ws = new WebSocket(c.url);
   this.ws.onopen  = c.open || function(){};
   this.ws.onclose = c.close || function(){};
   this.ws.onerror = c.error || function(){};
   this.ws.onmessage = c.message || function(){};
  }
 }; sock.close = function(){ 
  if (this.method == 'WebSocket') {
   this.ws.close();
   delete this.ws;
  }
 }; sock.send = function(data){
  if (this.method == 'WebSocket'){
   if (typeof data == 'object') this.ws.send(JSON.stringify(data));
   else this.ws.send(data);
  }
 }; return sock;

};

$.socket.supported = function(){ return ("WebSocket" in window);};})();
(function(){



$.load = function(){ var $log = $.logging('Loader'); 
 var c = 0, todo = [ 
 function Load_Memory(next){  $.memory = {};
  try {
   $.memory = JSON.parse($.cookie('opal_memory')); 
  } catch (e) {}  
  $.memorySync = setInterval(function(){
   $.cookie('opal_memory', JSON.stringify($.memory));
  }, 1000);  next(); }, 
 function Load_User(next){  $log('Loading UserData...');
  $.me = $.my = {authed:false};
  next(); }, 
 function Load_Instance(next){  $log('Loading Instance...');
  $.instance = {
   id: $.uid(),
   name: "Opal Portal",
   domain: "lab.iohq.org"
  };  next(); }, function Load_Apps(next){  $.Appnav.init();  next(); }, function Load_Contacts(next){  next(); }, function Load_Portal(next){  $.Portal.init();
  next(); } 
];var load = function(){ if (typeof todo[c] == 'function'){  todo[c](function(){
   c++;
   load();
  }); } else {  $log('Loader is done.'); }};

 load();};
})();
(function(){
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
});})();
(function(){


$.on('ws-message', function(event, data){ if (data.presence) $.do('presence', data.presence); if (data.type) {
  if (data.type == 'connection' && data.method == 'open') $.do('user-online', data);
  if (data.type == 'connection' && data.method == 'close') $.do('user-offline', data);
 }
});


$.on('presence', function(event, data){ console.log('PRESENCE:', data);
 $.do('presence-'+data.type, data);});
})();
(function(){

$.Appnav = { "select": function(what){  what = what.toLowerCase();  $.goto(what); }, "check": function(app){  var access = true;  
  if (app.access) {
  app.access.forEach(function(rule){
   for(var each in rule){
    if ($.me[each] !== rule[each]) access = false;
   }
  });
  }  if (access) $('.nav.apps li.app[data-appid="' + app.id + '"]').attr('style', 'display:block');
  else $('.nav.apps li.app[data-appid="' + app.id + '"]').attr('style', 'display:none'); }, "init": function(){  $('.nav.apps').html($.View('modules.apps.main', {$:$}));  $('.nav.apps li.app').each(function(i,element){ 
   $(element).attr('style','display:none');
   $(element).on('click', function(){
   $.Appnav.select($(this).attr('data-appname')); 
   });
  });  $.do('appnav.init');  setInterval(function(){
   $.apps.forEach(function(app){
    $.Appnav.check(app);
   });
  },1000); }};})();
(function(){})();
(function(){

$.ContextMenu = { "menu": [], "show": function(menu){  $('.nav.context')[0].style.display = 'inline-block';  var MenuGen = $.View('modules.contextmenu.main', {   menu: $.ContextMenu.menu  });  $('.nav.context').html(MenuGen); }, "hide": function(){
  $('.nav.context')[0].style.display = 'none';
 }}})();
(function(){
var $log = $.logging('Portal');




$.Portal = {
 version:"1.0",
 views: {}, 
 init: function(){  $.do('ready'); },
 view: function(name, config){  $(".portal-content > div").attr('data-selected', 'no');  if (!$.Portal.views[name]) {
   var div = document.createElement('div');
   $(div).attr('data-name', name);
   $(div).attr('data-config', JSON.stringify(config));
   div.className = "app view portal-" + name;
   $('.portal-content').append(div);
  }  $log('Viewing ' + name + ' (' + config.main + ')');  $.Portal.views[name] = config;  $(".portal-content [data-name='" + name + "']").attr('data-selected', 'yes');  if ( $.app(name).initiated ) return false;  var render = $.View(config.main, config);
  $(".portal-content [data-name='" + name + "']").html(render); }
};

})();