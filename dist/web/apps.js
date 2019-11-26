
/* OPAL Apps
 * 
 * Compiled manifests from Opal apps.
 */

/*globals $*/


$.apps = [
 {
  "name": "Find",
  "id": "find",
  "description": "Search",
  "version": "1.0",
  "icon": "fas fa-search",
  "class": "bottom",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/00 find"
 },
 {
  "name": "Auth",
  "id": "auth",
  "description": "Access & Identity Management",
  "tags": [
   "account",
   "profile",
   "register",
   "access",
   "iam",
   "login",
   "user",
   "authentication",
   "authorization",
   "edit"
  ],
  "version": "1.0",
  "icon": "fas fa-user",
  "class": "top",
  "directory": "/apps/01 auth"
 },
 {
  "name": "Home",
  "id": "home",
  "description": "User home page.",
  "tags": [
   "home",
   "main"
  ],
  "version": "1.0",
  "icon": "fas fa-home",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/02 home"
 },
 {
  "name": "Chat",
  "id": "chat",
  "description": "Talk to users in group channels.",
  "tags": [
   "talk",
   "chat",
   "channels",
   "groups",
   "slack",
   "server"
  ],
  "version": "1.0",
  "icon": "fas fa-comment-alt",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/05 chat"
 },
 {
  "name": "Gems",
  "id": "gems",
  "description": "Earn Gems to buy cool stuff!",
  "version": "1.0",
  "icon": "fas fa-gem",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/06 gems"
 },
 {
  "name": "Shop",
  "id": "shop",
  "description": "Unlock features, boosts & polishes!",
  "version": "1.0",
  "icon": "fas fa-gift",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/07 shop"
 },
 {
  "name": "Data",
  "id": "data",
  "description": "Asset & Data Storage",
  "tags": [
   "data",
   "db",
   "database",
   "assets"
  ],
  "version": "1.0",
  "icon": "fas fa-database",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/08 data"
 },
 {
  "name": "Debug",
  "id": "debug",
  "description": "Debug App",
  "tags": [
   "debug",
   "system"
  ],
  "version": "1.0",
  "icon": "fas fa-bug",
  "access": [
   {
    "authed": true
   }
  ],
  "directory": "/apps/09 debug"
 },
 {
  "name": "Admin",
  "id": "admin",
  "version": "1.0",
  "icon": "fas fa-tools",
  "access": [
   {
    "authed": true,
    "admin": true
   }
  ],
  "directory": "/apps/10 admin"
 }
];





     
    /**
    [
  "/home/ec2-user/environment/OpalPortal/src/apps/10 admin/admin.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/09 debug/views/terminal/terminal.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/09 debug/view.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/09 debug/router.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/09 debug/pane.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/09 debug/events.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/08 data/view.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/08 data/router.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/08 data/pane.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/07 shop/shop.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/06 gems/gems.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/05 chat/events.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/05 chat/chat.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/02 home/view.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/02 home/router.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/02 home/events.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/01 auth/views/overview/overview.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/01 auth/views/email/signup.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/01 auth/views/email/signin.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/01 auth/functions/check.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/01 auth/auth.js",
  "/home/ec2-user/environment/OpalPortal/src/apps/00 find/find.js"
]
    **/
    
    
 
 
$.views['apps.find.main'] = "<!--The header.-->\n<header>\n <h1><i class=\"{{=app.icon}}\"></i><span class=\"text\">Opal FIND</span></h1>\n</header>\n<!--The main content.-->\n<main>\n <div class=\"FindBox\">\n  <i class=\"icon fas fa-search\"></i>\n  <input onkeyup=\"$.app('find').key(this)\" value=\"\" placeholder=\"Search Opal...\" />\n </div> <div class=\"results\"></div>\n</main>\n\n<!--Footer for Controls and what not.-->\n<footer>\n IOHQ LLC.\n</footer>";
     
$.views['apps.find.result'] = "<h4><span class=\"text\">{{=title}}</span></h4>\n<p class=\"text\">\n {{=description}}\n</p>";
     
$.views['apps.auth.main'] = "<!--The header.-->\n<header>\n <h1><i class=\"{{=app.icon}}\"></i><span class=\"text\">Authentication</span></h1>\n</header>\n<!--The main content.-->\n<main></main>\n\n<!--Footer for Controls and what not.-->\n<footer><span class=\"brand text bold\">OPAL</span><span class=\"version text\">AUTH</span> <span class=\"version text bold\">1.0.1</span></footer>";
     
$.views['apps.auth.account-settings'] = "<table id=\"account_settings\">\n <tbody>\n <tr>\n <td>\n <div class=\"component container form\">\n <form>  <h1>Account Settings</h1>  <br />  <div class=\"input\">\n   <i class=\"icon fas fa-envelope\"></i>\n  <input type=\"email\" placeholder=\"Email Address\" id=\"auth_emailaddress\" />\n  </div>  <br />    \n  <div class=\"input\">\n   <i class=\"icon fas fa-phone\"></i>\n  <input type=\"email\" placeholder=\"Phone Number\" id=\"auth_phonenumber\" />\n  </div>  <br />     <br />   \n  <br />  <div class=\"button\">\n   <i class=\"icon fas fa-lock\"></i>\n   <div class=\"text\">Change Password</div>\n  </div>    \n  <div class=\"button\">\n   <i class=\"icon fas fa-check\"></i>\n   <div class=\"text\">Verify</div>\n  </div> </form> </div>\n </td>\n </tr>\n </tbody>\n</table>";
     
$.views['apps.auth.email-signin'] = "<table id=\"signin\">\n <tbody>\n  <tr>\n   <td>\n    <div class=\"component container form\">\n    <form>     <h1>Sign-In</h1>      <br>     <div class=\"messages\"></div>     <br>     \n     <div class=\"input\">\n      <i class=\"icon fas fa-envelope\"></i>\n      <input type=\"email\" placeholder=\"Email Address\" id=\"signin_emailaddress\" />\n     </div>     <br />     <div class=\"input\">\n      <i class=\"icon fas fa-lock\"></i>\n      <input autocomplete=\"password\" placeholder=\"Password\" type=\"password\" id=\"signin_password\" />\n     </div>     <br />     <div class=\"button\" onclick=\"$.app('auth').signin()\">\n      <i class=\"icon fas fa-check\"></i>\n      <div class=\"text\">Signin</div>\n     </div>    </form>    </div>\n   </td>\n  </tr>\n </tbody>\n</table>";
     
$.views['apps.auth.email-signup'] = "<table>\n <tbody>\n  <tr>\n   <td>\n    <div class=\"component container form\">\n    <div class=\"component container form\">\n     <form>      <h1>Sign-Up</h1>       <br />      <div class=\"messages\"></div>      <br>      <div class=\"input\">\n       <i class=\"icon fas fa-envelope\"></i>\n       <input type=\"email\" placeholder=\"Email Address\" id=\"auth_emailaddress\" />\n      </div>      <br />      <div class=\"input\">\n       <i class=\"icon fas fa-lock\"></i>\n       <input autocomplete=\"password\" placeholder=\"Password\" type=\"password\" id=\"auth_password\" />\n      </div>      <br />      <div class=\"input\">\n       <i class=\"icon fas fa-lock\"></i>\n       <input autocomplete=\"password\" placeholder=\"Confirm Password\" type=\"password\" id=\"auth_password_confirm\" />\n      </div>      <br />      <div class=\"button\">\n       <i class=\"icon fas fa-check\"></i>\n       <div class=\"text\">Signup</div>\n      </div>     </form>\n    </div>\n   </td>\n  </tr>\n </tbody>\n</table>";
     
$.views['apps.auth.test'] = "";
     
$.views['apps.auth.loading'] = "<table id=\"profile_overview\">\n <tbody>\n <tr>\n <td>\n <b>Loading...</b>\n </td>\n </tr>\n </tbody>\n</table>";
     
$.views['apps.auth.overview'] = "<table id=\"profile_overview\">\n <tbody>\n <tr>\n <td>\n <div class=\"component container form\">\n <form>  <h1>Hi, {{=name}}!</h1>  <br>\n  <ul>\n   <li onclick=\"$.app('auth').pane('basic')\">Upload Avatar</li>\n   <li onclick=\"$.app('auth').pane('basic')\">Change Username</li>\n  </ul>\n  <ul>\n   <li onclick=\"$.app('auth').pane('advanced')\">Edit Profile</li>\n  </ul>\n  <ul>\n   <li onclick=\"$.app('auth').pane('account')\">Account Settings</li>\n   <li onclick=\"$.app('auth').signout()\">Signout</li>\n  </ul> </form>\n </div>\n </td>\n </tr>\n </tbody>\n</table>";
     
$.views['apps.auth.profile-advanced'] = "<div onclick=\"$.app('auth').pane('overview')\" class=\"button\">\n <span class=\"text\">Back to Overview</span>\n</div>";
     
$.views['apps.auth.profile-basic'] = "<div onclick=\"$.app('auth').pane('overview')\" class=\"button\">\n <span class=\"text\">Back to Overview</span>\n</div>";
     
$.views['apps.auth.profile-preview'] = "<div onclick=\"$.app('auth').pane('overview')\" class=\"button\">\n <span class=\"text\">Back to Overview</span>\n</div>";
     
$.views['apps.auth.splash'] = "<a class=\"button\" onclick=\"$.app('auth').pane('signup')\">\n <span class=\"text\">I'm new here.</span>\n</a>\n<a class=\"button\" onclick=\"$.app('auth').pane('signin')\">\n <span class=\"text\">I've been here before.</span>\n</a>";
     
$.views['apps.home.main'] = "<!--The header.-->\n<header>\n <h1><i class=\"{{=app.icon}}\"></i> Welcome Home, {{=$.my.name}}!</h1>\n</header>\n\n<!--App Navigation-->\n<nav>\n <li>Main</li>\n</nav>\n\n<!--The main content.-->\n<main>\n <div class=\"app\">  <!--Top-->  <div class=\"home\">\n   <div class=\"userHeader\">\n    <!-- USER image -->\n    <i class=\"icon fas fa-user\"></i>\n    <span class=\"usernameText\">Username</span>\n   </div>   <div class=\"feedInput\">\n    <section>\n    <table>\n     <tbody>\n      <tr>\n       <td class=\"postButton\">\n        <span class=\"fa fa-ellipsis-h\"></span>\n       </td>\n       <td>\n        <div class=\"postInput\">\n        <textarea value placeholder=\"What's on your mind\"></textarea>\n        </div>\n       </td>\n       <td class=\"postButton\">\n        <span class=\"fa fa-chevron-right\"></span>\n       </td>\n      </tr>\n     </tbody>\n    </table>\n    </section>\n   </div>   <div class=\"feedOutput\">\n    <section>\n    <table>\n     <tbody>\n      <tr>\n       <td class=\"outputUsername\">\n        <i class=\"icon fas fa-user\"></i>\n        <span>Username</span>\n       </td>\n       <td>\n        <div class=\"\">\n        <textarea value placeholder=\"\"></textarea>\n        </div>\n       </td>\n       <td class=\"\">       </td>\n      </tr>\n     </tbody>\n    </table>\n    </section>\n   </div>\n  </div>\n </div>\n</main>\n\n<!--Footer for Controls and what not.-->\n<footer><span class=\"brand text bold\">OPAL</span><span class=\"version text\">HOME</span> <span class=\"version text bold\">1.0.1</span></footer>";
     
$.views['apps.chat.main'] = "<!--The header.-->\n<header>\n <h1><i class=\"{{=app.icon}}\"></i> Hi, {{=$.my.name}}!</h1>\n</header>\n\n<!--App Navigation-->\n<nav>\n</nav>\n\n<!--The main content.-->\n<main>\n <div class=\"app\">\n  <div id=\"ChatManager\"></div>\n  <div id=\"ChatBrowser\"></div>\n </div>\n</main>\n\n<!--Footer for Controls and what not.-->\n<footer><span class=\"brand text bold\">OPAL</span><span class=\"version text\">CHAT</span> <span class=\"version text bold\">1.0.1</span></footer>";
     
$.views['apps.chat.chat'] = "<div class=\"nav\">\n <div class=\"content\">\n  <div class=\"switch\">\n   <label>{{=channel.name}}</label>\n   <div class=\"button tile\" style=\"display:none\" onclick=\"$.app('chat').showUsers()\"><i class=\"icon fas fa-users\"></i></div>\n   <div class=\"button tile\" style=\"display:none\" onclick=\"$.app('chat').showTopics()\"><i class=\"icon fas fa-hashtag\"></i></div>\n  </div>\n  <div class=\"topics\">\n   <ul>\n   {{ channel.topics.forEach(function(topic){ }}\n    <li onclick=\"$.app('chat').switch('{{=channel.id-}}', '{{=topic.id-}}')\">{{=topic.name-}}</li>\n   {{ }); }}\n   </ul>\n  </div>  <div class=\"users\">  </div>\n </div>\n</div>\n\n<div class=\"output\">\n</div>\n\n\n<div class=\"input\">\n <div class=\"content\">\n  <div class=\"options\"></div>\n  <textarea></textarea>\n </div>\n</div>";
     
$.views['apps.chat.topic'] = "";
     
$.views['apps.gems.main'] = "<!--The header.-->\n<header>\n <h1>\n  <i class=\"{{=app.icon}}\"></i>\n  <span class=\"text\">Opal Gems</span>\n </h1>\n</header>\n<!--The main content.-->\n<main>\n <section>\n  <div class=\"balance\">\n  <i class=\"icon fas fa-gem diamond\" />\n  <span class=\"text\">5</span>\n  </div> \n  <div class=\"balance\">\n  <i class=\"icon fas fa-gem ruby\" />\n  <span class=\"text\">10</span>\n  </div>\n  <div class=\"balance\">\n  <i class=\"icon fas fa-gem emerald\" />\n  <span class=\"text\">350</span>\n  </div> \n  <div class=\"balance\">\n  <i class=\"icon fas fa-gem sapphire\" />\n  <span class=\"text\">200</span>\n  </div>\n  <div class=\"balance\">\n  <i class=\"icon fas fa-gem opal\" />\n  <span class=\"text\">5.3K</span>\n  </div> \n </section> <section>\n  <b>Earnings</b>\n  <div class=\"messages\">\n   <li>\n   <label>The Prodigal Son</label>\n   <div><b>-</b>\n  <i class=\"icon fas fa-gem ruby\" />\n  <span class=\"text\">10,300</span>\n    <p></p>\n   </div>\n   </li>\n  </div>\n </section> <section>\n  <b>Expenses</b>\n  <div class=\"messages\">\n   <li>Onyx Theme</li>\n  </div>\n </section></main>\n\n<!--Footer for Controls and what not.-->\n<footer><span class=\"brand text bold\">OPAL</span><span class=\"version text\">GEMS</span> <span class=\"version text bold\">1.0.1</span></footer>";
     
$.views['apps.gems.gem'] = "<h4><span class=\"text\">{{=title}}</span></h4>\n<p class=\"text\">\n {{=description}}\n</p>";
     
$.views['apps.shop.main'] = "<!--The header.-->\n<header>\n <h1><i class=\"{{=app.icon}}\"></i><span class=\"text\">Opal Shop</span></h1>\n</header>\n<!--The main content.-->\n<main>\n <div class=\"FindBox\">\n  <i class=\"icon fas fa-search\"></i>\n  <input onkeyup=\"$.app('shop').key(this)\" value=\"\" placeholder=\"Search the Shop...\" />\n </div> <div class=\"results\"></div>\n</main>\n\n<!--Footer for Controls and what not.-->\n<footer><span class=\"brand text bold\">OPAL</span><span class=\"version text\">SHOP</span> <span class=\"version text bold\">1.0.1</span></footer>";
     
$.views['apps.shop.item'] = "<h4><span class=\"text\">{{=title}}</span></h4>\n<p class=\"text\">\n {{=description}}\n</p>";
     
$.views['apps.data.integrations-item'] = "Integration item...";
     
$.views['apps.data.integrations'] = "Integrations...";
     
$.views['apps.data.loading'] = "<table id=\"profile_overview\">\n <tbody>\n <tr>\n <td>\n <b>Loading Datasets...</b>\n </td>\n </tr>\n </tbody>\n</table>";
     
$.views['apps.data.log-filter'] = "Log Controls";
     
$.views['apps.data.logs-item'] = "Log...";
     
$.views['apps.data.logs'] = "Logs...";
     
$.views['apps.data.main'] = "<!--The header.-->\n<header>\n <h1><i class=\"{{=app.icon}}\"></i><span class=\"text\">Authentication</span></h1>\n</header>\n\n<nav>\n <li onclick=\"$.app('data').pane('sets')\">Sets</li>\n <li onclick=\"$.app('data').pane('schemes')\">Schemas</li>\n <li onclick=\"$.app('data').pane('syncs')\">Syncs</li>\n <li onclick=\"$.app('data').pane('logs')\">Logs</li>\n</nav>\n<!--The main content.-->\n<main>\n</main>\n\n<!--Footer for Controls and what not.-->\n<footer><span class=\"brand text bold\">OPAL</span><span class=\"version text\">DATA</span> <span class=\"version text bold\">1.0.1</span></footer>";
     
$.views['apps.data.schemes-item'] = "Logs...";
     
$.views['apps.data.schemes'] = "Schemes...";
     
$.views['apps.data.sets-item'] = "Set..";
     
$.views['apps.data.sets'] = "Sets...";
     
$.views['apps.data.splash'] = "<a class=\"button\" onclick=\"$.app('auth').pane('signup')\">\n <span class=\"text\">I'm new here.</span>\n</a>\n<a class=\"button\" onclick=\"$.app('auth').pane('signin')\">\n <span class=\"text\">I've been here before.</span>\n</a>";
     
$.views['apps.data.syncs-item'] = "Sync...";
     
$.views['apps.data.syncs'] = "Syncs...";
     
$.views['apps.debug.main'] = "";
     
$.views['apps.debug.cache'] = "{{ for(var each in $.OpalEvents) { }}\n\n <li>{{=each-}}</li>\n\n{{ } }}";
     
$.views['apps.debug.data'] = "{{ for(var each in $.OpalEvents) { }}\n\n <li>{{=each-}}</li>\n\n{{ } }}";
     
$.views['apps.debug.events'] = "{{ for(var each in $.OpalEvents) { }}\n\n <li>{{=each-}}</li>\n\n{{ } }}";
     
$.views['apps.debug.logs'] = "{{ for(var each in $.OpalEvents) { }}\n\n <li>{{=each-}}</li>\n\n{{ } }}";
     
$.views['apps.debug.terminal'] = "<div id=\"terminal\">\n <div id=\"output\"></div>\n <div id=\"input\"></div>\n</div>";
     
$.views['apps.debug.users'] = "{{ for(var each in $.OpalEvents) { }}\n\n <li>{{=each-}}</li>\n\n{{ } }}";
     
$.views['apps.admin.main'] = "This is the admin.";
    ;
(function(){$.Admin = { "init": function(){   }};})();
(function(){})();
(function(){/*globals $*/
$.app('debug', { "view": function(){  if (!$.app("debug").initiated) {    $.do('debug-init');
   $.app("debug").initiated = true;   
   for(var each in $.views){
   var item = each.split('.')[2];
   if (each.split('.')[1]=='debug' && item!=='main'){
    $(".portal-Debug main").append("<div id='debug_pane_" + item + "'></div>");
    $("#debug_pane_" + item).html($.View('apps.debug.' + item, $.me));
   }
   }    
  } }});})();
(function(){/*globals $*/

$.app("data", { 
 "router": {   }
 });})();
(function(){/*globals $*/
$.app('debug', { 
});})();
(function(){/*globals $*/

})();
(function(){/*globals $*/
$.app('data', { 
 "view": function(){  if (!$.app("data").initiated) {    $.do('data-init');
   $.app("data").initiated = true;   
   for(var each in $.views){
   var item = each.split('.')[2];
   if (each.split('.')[1]=='data' && item!=='main'){
    $(".portal-Data main").append("<div id='data_pane_" + item + "'></div>");
    $("#auth_pane_" + item).html($.View('apps.data.' + item, $.me));
   }
   }  }  $.app('data').pane('loading'); }});})();
(function(){/*globals $*/

$.app("data", { 
 "router": {  "set": {  "title": "Signin",
  "description": "",
  "render": function(){
   $.app('data').pane('dataset-signin');
  }  },  "set/new": {  "title": "Create a new dataset.",
  "description": "",
  "render": function(){
   $.app('data').pane('dataset-new');
  }  },  
  "set/edit": {  "title": "Edit a dataset.",
  "description": "",
  "render": function(){
   $.app('data').pane('dataset-edit');
  }  },  "set/sync": {  "title": "Sync a dataset with an external source.",
  "description": "",
  "render": function(){
   $.app('auth').pane('email-signup');
  }  }  
 }
 });})();
(function(){/*globals $*/
$.app('data', { "pane": function(which){  $(".portal-Data main > div").each(function(i,element){  if (!new RegExp(which).test(element.id)) {   $(element).attr('style', 'display:none');  } else {
   $(element).attr('style','display:block');
   console.log('viewing: apps.data.' + which);
   $('#' + element.id).html($.View('apps.data.' + which, $.my));
  }  }); }});})();
(function(){/*globals $*/

$.app("shop", {  "view": function(){  $.app('shop').search('_');  if (!$.app("shop").initiated) {   $.do('shop-init');
   $.app("shop").initiated = true;   
  } 
 }, "key": function(input){  $.app('shop').search(input.value);  
  if (event.keyCode==13) {
  var first = $('.portal-Shop .results .result')[0];
  if (first) first.click();
  }  
 }, "search": function(text){  if (text.trim()=='') return false;  console.log('searching for ' + text);  text = text.toLowerCase().trim();  var rank = {
  a: [],
  b: [],
  c: []
  };    /* <logic> */  $.apps.forEach(function(app){    });  
  /* </logic> */    var results = [{title:"Coming Soon!", class:"a", id:$.uid(), description:"This app is currently under construction. Check back soon!"}];
  for(var each in rank) rank[each].forEach(function(result){ result.class = each; results.push(result) });  console.log(results);
  $(".portal-Shop .results").html(''); 
  results.forEach(function(result){
  $(".portal-Shop .results").append("<div class='result " + result.class + "' id='Result_" + result.id + "'>" + $.View('apps.shop.item', result) + "</div>");
  $("#Result_" + result.id).on('click', result.click);
  }); }});})();
(function(){/*globals $*/

$.app("gems", { "view": function(){  if (!$.app("gems").initiated) {   $.do('gems-init');
   $.app("gems").initiated = true;   
  } 
 }});})();
(function(){/*globals $*/

/* LISTEN FOR MESSAGES */
$.on('ws-message', function(event, data){ if (!data.message || !data.message.message_id) return false; var message_id = data.message.message_id;
 var channel_id = data.message.channel_id;
 var topic_id = null;
 var public = data.message.public[data.message.author_id]; 
 $.app('chat').chats[channel_id].messages.push(data.message.public);
 if ($.app('chat').chats[channel_id].messages.length>10000) $.app('chat').chats[channel_id].messages.splice(0,1); try {
  var pub = JSON.parse(public);
  topic_id = pub.topic_id;
  data.message.tag = pub.tag;
 } catch (e) {} $.app('chat').post(channel_id, topic_id, data.message);});

// When chat initializes, go to default channel and topic.
$.on('chat-init', function(event){ $.app('chat').switch('c1','t1');
 $.app('chat').showUsers();});


$.on('chat-history-load', function(event, data){ var channel_id = data.channel_id;
 data.messages.forEach(function(message){  var topic_id = null;
  var public = message.public[message.author_id];  
  $.app('chat').chats[channel_id].messages.push(message.public);
  if ($.app('chat').chats[channel_id].messages.length>10000) $.app('chat').chats[channel_id].messages.splice(0,1);  try {
   var pub = JSON.parse(public);
   topic_id = pub.topic_id;
  } catch (e) {}  $.app('chat').post(channel_id, topic_id, message);  
 });});


$.on('presence-channel', function(event, data){ if (!$.app('chat').chats[data.channel_id]) return false; var userlist = $.app('chat').chats[data.channel_id].userlist; if (data.text == 'online'){
  $.User(data.user_id, function(){   if (!userlist[data.user_id]){    userlist[data.user_id] = $.copy($.Users[data.user_id]);    userlist[data.user_id].joined = Date.now();
    $.do('chat-channel-adduser', data);   }  });
 } 
});

$.on('chat-channel-post-done', function(event, data){ $.do('chat-channel-updateusers', data);
 $.app('chat').scroll(data.channel_id);});


$.on('chat-channel-adduser', function(event, data){ console.log('adding user:', data.user_id);
 $.do('chat-channel-updateusers', data);});



$.on('chat-channel-deluser', function(event, data){ console.log('deleting user:', data.user_id);
 $.do('chat-channel-updateusers', data);});

$.on('chat-channel-updateusers', function(event, data){ console.log('updating users'); if(!$.app('chat').chats[data.channel_id]) return false; var userlist = $.app('chat').chats[data.channel_id].userlist; var list = $.app('chat').manager.find('.chat_' + data.channel_id + ' .users'); var map = {};
 var keys = []; for(var user_id1 in userlist) {
  var user = userlist[user_id1];
  var key = user.lastMessage + "_" + user_id1;
  keys.push(key);
  map[key] = user;
 } keys = keys.sort().reverse(); 
 $(list).html('');
 keys.forEach(function(key){
  var user = map[key];
  $(list).append('<li>'+user.name+'</li>');
 });
});

$.on('chat-channel-select-done', function(event, data){
 $.app('chat').scroll(data.channel_id); 
});

$.on('user-offline', function(event,data){ console.log('user went offline:', data); for(var channel_id in $.app('chat').chats){  var chat = $.app('chat').chats[channel_id];  if (chat.userlist && chat.userlist[data.user_id]) {   var user = chat.userlist[data.user_id];
   user.channel_id = channel_id;
   var userCopy = $.copy(user);
   delete chat.userlist[data.user_id];
   $.do('chat-channel-deluser', userCopy);  }  
 }});})();
(function(){/* globals $ */

$.app('chat', { "chats": {}, "router": {  "channel": {  "render": function(a){
    console.log(a);
  }  },  "join": {   "title": "Join a Chat",
   "description": "Chat with other users in a channel.",
   "tags": ["channel", "chat", "join", "server"],   "render": function(){   }  },  "create": {   "title": "Create a Chat",
   "description": "Create your own chat channel and invite others.",
   "tags": ["create", "channel", "chat"],   "render": function(){   }  } }, "state": function(channel_id, key, value){  if (!$.app('chat').state[channel_id]) $.app('chat').state[channel_id] = {};  
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
  } }, "channels": [  {
  "name":"General",
  "id": "c1",
  "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
  "topics":[
   {"name": "General", "id": "t1"}
  ],
  },{
  "name":"Gaming",
  "id": "c2",
  "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
  "topics":[
   {"name": "General", "id": "t1"}
  ],
  },{
  "name":"Memes",
  "id": "c3",
  "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
  "topics":[
   {"name": "General", "id": "t1"}
  ],
  },{
  "name":"Flirt",
  "id": "c4",
  "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
  "topics":[
   {"name": "General", "id": "t1"}
  ],
  },{
  "name":"Off-Topic",
  "id": "c5",
  "icon": "https://png.pngtree.com/element_our/png/20181206/chat-vector-icon-png_260846.jpg",
  "topics":[
   {"name": "General", "id": "t1"}
  ]
  } ], // Switch to a different chat.
 "switch": function(channel_id, topic_id){  $.do('chat-channel-select', {channel_id:channel_id, topic_id:topic_id
  });

  if (!topic_id) topic_id = "t1";  if (!$.me.subscribed) $.me.subscribed = {};  if (!$.me.subscribed[channel_id]) {
   $.me.subscribed[channel_id] = true;
   $.rest('subscription').post({channel_id:channel_id});
   $.rest('presence').post({channel_id:channel_id, type:"channel", text:"online"},console.log);
  }  console.log('channel switching to:', channel_id);  $.app('chat').chosen = {"channel":channel_id, "topic":topic_id};  var channel = null;  $.app('chat').channels.forEach(function(c){
   if (c.id == channel_id) channel = c;
  });  $.app('chat').manager.find('.chat').attr('style', 'display:none');
  $.app('chat').manager.find('.chat_' + channel_id).attr('style', 'display:block');  if ( !$.app('chat').chats[channel_id] ) {   $.do('chat-channel-init', {
    channel_id: channel_id, 
    channel: channel
   });   var div = document.createElement('div');
   $(div).attr('class', 'chat chat_' + channel.id);
   $(div).html($.View('apps.chat.chat', {channel:channel, my:$.my, me:$.me} ));
   div.style = "display:block";
   channel.element = div;
   $.app('chat').chats[channel_id] = channel;
   $.app('chat').chats[channel_id].userlist = {};
   $.app('chat').manager.append(div);   var input = $(div).find('.input textarea');   $(input).attr('disabled', 'true');   $.rest('messages', {channel_id:channel_id}).get(function(GetError, response){   $.app('chat').chats[channel_id].messages = $.copy(response.messages).reverse();
   $.do('chat-history-load', {channel_id:channel_id, messages:$.copy(response.messages).reverse()});   });   input.on('keydown', function(evt){      });   input.on('keyup', function(evt){   $.app('chat').type(channel_id, evt);   });   $(input).removeAttr('disabled');   
   $.do('chat-channel-init-done', {channel_id:channel_id, channel:channel});  }   if (topic_id) {
   var topic = $.app('chat').topic(channel_id, topic_id);
   $($.app('chat').manager.find('.topic')).attr('style', 'display:none');
   $(topic.container).attr('style','display:block');
  }  
  $.app('chat').showUsers();
  $.do('chat-channel-select-done', {channel_id:channel_id, topic_id:topic_id}); }, "channel": function(channel_id){  var o = null;  $.app('chat').channels.forEach(function(channel){   
   if (channel_id==channel.id) {
    channel.container = '.chat_' + channel_id;
    o = channel;
   }  });  return o; }, 
 "topic": function(channel_id, topic_id){  var channel = $.app('chat').channel(channel_id),
   t = null;

  channel.topics.forEach(function(topic){
  if (topic_id==topic.id) {   if (!$(channel.container).find('#topic_' + topic.id)[0]) {
    $(channel.container).find('.output').append('<div class="topic" id="topic_' + topic.id + '" style="display:none"></div>');
   }   topic.container = channel.container + ' #topic_' + topic.id;
   t = topic;  }
  });  return t;  
 }, 
 "scroll": function(channel_id) {  var output = $.app('chat').manager.find('.chat_' + channel_id + ' .output')[0];
  output.scrollTop = output.scrollHeight; }, "view": function(){  var chat = $(".portal-Chat");  // Define elements for frame functionality.
  $.app('chat', {   frame:  chat,
   nav:  $(chat.find('nav')[0]),
   header: $(chat.find('header')[0]),
   footer: $(chat.find('footer')[0]),
   main:  $(chat.find('main')[0]),
   browser: chat.find('#ChatBrowser'),
   manager: chat.find('#ChatManager')  });  
  if (!$.app('chat').initiated) {   console.log('Chat intiiated.');   $.app('chat').initiated = Date.now();   $.app('chat').channels.forEach(function(channel){    var li = document.createElement('li');
    $(li).attr('data-channel', channel.id);
    $(li).on('click', function(){
    $.app('chat').switch($(this).attr('data-channel'));
    });
    $(li).html('<label>' + channel.name + '</label>');
    var image = document.createElement('div');
    $(image).attr('class', 'image');
    $(image).append('<div style="background-image:url(' + channel.icon + ')"></div>');
    $(li).append(image);
    $.app('chat').nav.append(li);   });  
   $.do('chat-init');  }  
 }, "showTopics": function(){
  $($.app('chat').manager.find('.users')).attr('style','display:none');
  $($.app('chat').manager.find('.topics')).attr('style','display:block');
 }, "showUsers": function(){
  $($.app('chat').manager.find('.users')).attr('style','display:block');
  $($.app('chat').manager.find('.topics')).attr('style','display:none');
 }, "parse": function(message){   }, 
 // Handle the chat input.
 "type": function(channel_id, event){  $.do('chat-channel-type', {channel_id:channel_id, event:event});  
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
  } }, // Pull the chat history.
 "pull": function(channel_id, topic_id, query){  // Pull History...
  var data = null;  $.do('chat-channel-pull', {channel_id:channel_id, topic_id:topic_id, data:data}); }, // Push to chat.
 "push": function(channel_id, topic_id, data){  $.do('chat-channel-push', {channel_id: channel_id, data:data});  // Post and Send.
  data.tag = $.uid();  data.author_id = $.me.user_id;
  $.app('chat').post(channel_id, topic_id, $.copy(data));
  $.app('chat').send(channel_id, topic_id, $.copy(data));  $.do('chat-channel-push-done', {channel_id: channel_id, data:data}); }, // Post a message.
 "post": function(channel_id, topic_id, data){  var userlist = $.app('chat').chats[channel_id].userlist;  $.User(data.author_id, function(Err){   if (!userlist[data.author_id]) {
    userlist[data.author_id] = $.Users[data.author_id];
    $.do('chat-channel-adduser', {channel_id:channel_id, author_id:data.author_id});
   }   userlist[data.author_id].lastMessage = Date.now();   var author = $.Users[data.author_id];   if ($('[data-message_id="' + data.message_id + '"]')[0]) return false;   if ($('[data-message_tag="' + data.tag + '"]')[0]) {
    $('[data-message_tag="' + data.tag + '"]').attr('data-received', 'true');
    return false;
   }   
   $.app('chat').topic(channel_id, topic_id);   var div = document.createElement('div');
   $(div).attr('data-message_id', data.message_id);
   $(div).attr('data-message_tag', data.tag);
   $.do('chat-channel-post', {channel_id:channel_id, data:data});
   div.innerHTML = author.name + ": " + data.text;
   $(".chat_" + channel_id).find('#topic_' + topic_id).append(div);
   $.do('chat-channel-post-done', {channel_id:channel_id, topic_id:topic_id, data:data});     }); }, // Send data.
 "send": function(channel_id, topic_id, data){  var payload = {
   channel_id: channel_id, 
   public:JSON.stringify({
    topic_id: topic_id,
    tag: data.tag
   }),
   text: data.text
  };  $.do('chat-channel-send', payload);
  $.rest('message').post(payload, function(err, data){
   if (data.created) {
    $.do('chat-message-send-success', {sent:payload, created:data.created});
   } else $.do('chat-message-send-fail', {sent:payload, error:err||data});
  }); }});})();
(function(){/*globals $*/
$.app('home', { "view": function(){  if (!$.app("home").initiated) {    $.do('home-init');
   $.app("home").initiated = true;   
   for(var each in $.views){
   var item = each.split('.')[2];
   if (each.split('.')[1]=='home' && item!=='main'){
    $(".portal-Debug main").append("<div id='home_pane" + item + "'></div>");
    $("#home_pane_" + item).html($.View('apps.home.' + item, $.me));
   }
   }    
  } }});})();
(function(){/*globals $*/

$.app("data", { 
 "router": {   }
 });})();
(function(){/*globals $*/

})();
(function(){/*globals $*/

$.app('auth', { "overview": function(){  /* Use this to force profile updates before continuing. */  var $log = $.logging('auth-overview');
  $.app('auth').check(function(){   console.log($.my.name);   $log('Checking Profile Items...', $.my);   $.app('auth').pane('overview', {name:$.my.name});  }); }});})();
(function(){/*globals $*/

$.app('auth', { "signin": function(){  var $log = $.logging('auth-signin');  $log('Signing up..');  $.rest('account').post({   email:  $("#signin_emailaddress").val(),
   password: $("#signin_password").val()  }, function(error, response){
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
    $.app('auth').check(function(AuthError, Authenticated){    if (Authenticated) $.do('auth-signin-success');
    else $.do('auth-signin-error');
    });
   }
   $(".portal-Auth #signin .messages").html('<p class="message ' + message.type + '">' + message.text + '</p>');

  }); }});})();
(function(){/*globals $*/

$.app('auth', { "signin": function(){  var $log = $.logging('auth-signin');  $log('Signing in..');  $.rest('auth/email').post({   email:  $("#signin_emailaddress").val(),
   password: $("#signin_password").val()  }, function(error, response){
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
    $.app('auth').check(function(AuthError, Authenticated){    if (Authenticated) $.do('auth-signin-success');
    else $.do('auth-signin-error');
    });
   }
   $(".portal-Auth #signin .messages").html('<p class="message ' + message.type + '">' + message.text + '</p>');

  }); }});})();
(function(){/*globals $*/
$.app('auth', {

 "check": function(callback){  var $log = $.logging('auth-check');
  $log('Checking auth...');  $.rest('user').get(function(a,b,c){
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
    for (var e2 in user) $.my[e2] = $.me[e2] = user[e2];    if (firsttime) $.do('auth-signin-success');
    callback(null, c.identity);
   }
  }); 
 }});})();
(function(){/*globals $*/

/** When Opal is ready, check login. **/
$.on('ready', function(){ $.app('auth').check(function(){  if ($.me.user) {
   $.app('auth').view();
   $.app('auth').overview();
  } else {
   $.goto('auth','signin');
  } });});
$.on('auth-signin-success', function(){ /* Should redirect to originally requested page. */
 console.log('works');
 $.app('auth').overview(); /* Need to set Auth app icon to user's avatar. */});
$.app("auth", { 
 "router": {  "signin": {  "title": "Signin",
  "description": "",
  "render": function(){
   $.app('auth').pane('email-signin');
  }  },  "signup": {  "title": "Register your account!",
  "description": "",
  "render": function(){
   $.app('auth').pane('email-signup');
  }  },  "signout": {  "title": "Logout of Opal",
  "description": "Signout",
  "render": function(){
   $.app('auth').signout();
  }  } }, "types": function(){},   "signout": function(){
  $.me.authed = false;
  $.me.auth = null;
  $.cookie('OAT1', 'null');
  $.do('auth-signout');
  $.goto('auth', 'signin'); }, "view": function(){  if (!$.app("auth").initiated) {    $.do('auth-init');
   $.app("auth").initiated = true;   
   for(var each in $.views){
   var item = each.split('.')[2];
   if (each.split('.')[1]=='auth' && item!=='main'){
    $(".portal-Auth main").append("<div id='auth_pane_" + item + "'></div>");
    $("#auth_pane_" + item).html($.View('apps.auth.' + item, $.me));
   }
   }  }  $.app('auth').pane('loading');  if ($.me.authed) $.app('auth').pane('overview'); }, "pane": function(which){  $(".portal-Auth main > div").each(function(i,element){  if (!new RegExp(which).test(element.id)) {   $(element).attr('style', 'display:none');  } else {
   $(element).attr('style','display:block');
   console.log('viewing: apps.auth.' + which);
   $('#' + element.id).html($.View('apps.auth.' + which, $.my));
  }  }); }, "add": function(type, options){  $.app("auth").types[type] = options; }});})();
(function(){/*globals $*/

$.app("find", { "view": function(){  if (!$.app("find").initiated) {   $.do('find-init');
   $.app("find").initiated = true;   
  } 
 }, "key": function(input){  $.app('find').search(input.value);  if (event.keyCode==13) {
  var first = $('.portal-Find .results .result')[0];
  if (first) first.click();
  } }, "search": function(text){  if (text.trim()=='') return false;  console.log('searching for ' + text);  text = text.toLowerCase().trim();  var rank = {
  a: [],
  b: [],
  c: []
  };    /* <logic> */  $.apps.forEach(function(app){  if (app.id == 'find') return false;
  if (app.id == 'admin') return false;  var ResultDetails = {
   "title":  "Opal App: " + app.name, 
   "id":   $.uid(),
   "icon":  app.icon,
   "description": app.description, 
   "click":  function(){
    $.goto(app.name);
   }
  };  if (app.name.toLowerCase() == text || app.id == text) rank.a.push($.copy(ResultDetails));   else if (RegExp('^' + text, 'i').test(app.name)) rank.c.push($.copy(ResultDetails));  else if (app.tags) {
   app.tags.forEach(function(tag){
    if (RegExp('^' + text, 'i').test(tag)) rank.c.push($.copy(ResultDetails)); 
   });
  }  if (app.router) for(var path in app.router) {   var route = app.router[path];   if (!route.title) return false;
   ResultDetails.title = '(' + app.name + ') ' + route.title;
   ResultDetails.description = route.description;
   ResultDetails.click = function(){
    $.goto(app.name, path);
   };   
   if (path.replace(/\//gi, '') == text) {    rank.a.push($.copy(ResultDetails));   } else if (RegExp(text).test(route.title)) {    rank.b.push($.copy(ResultDetails));   } else {    route.tags.forEach(function(tag){    if (text == tag) rank.c.push($.copy(ResultDetails));    });   }     }  });  
  /* </logic> */    var results = [];
  for(var each in rank) rank[each].forEach(function(result){ result.class = each; results.push(result) });  console.log(results);
  $(".portal-Find .results").html(''); 
  results.forEach(function(result){
  $(".portal-Find .results").append("<div class='result " + result.class + "' id='Result_" + result.id + "'>" + $.View('apps.find.result', result) + "</div>");
  $("#Result_" + result.id).on('click', result.click);
  }); }});})();