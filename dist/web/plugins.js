
/* OPAL Plugins
 * 
 * Compiled manifests from Opal plugins.
 */

/*globals $*/


$.plugins = [
 {
  "name": "XML Parser",
  "id": "xml",
  "version": "1.0.1",
  "author": "tyler@iohq.org",
  "directory": "/plugins/XML"
 }
];





     
    /**
    [
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/main.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/events.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/wide/wide.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/wave/wave.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/underline/underline.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/tiny/tiny.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/strike/strike.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/small/small.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/reverse/reverse.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/quote/quote.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/overline/overline.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/narrow/narrow.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/italic/italic.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/huge/huge.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/hax/hax.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/glow/glow.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/flip/flip.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/code/code.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/bold/bold.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/blur/blur.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/big/big.js",
  "/home/ec2-user/environment/OpalPortal/src/plugins/XML/Tags/backwards/backwards.js"
]
    **/
    
    

 
(function(){ 
 $.plugin('XML', {  "version": "Opal Markup 1.0",
  "author": "tyler@iohq.org",  "tags": {},  "add": function(selector, description, renderer){
   $.plugin('XML').tags[selector] = description;
   $.plugin('XML').tags[selector].render = renderer;
  },  "render": function(m){   var text = m.replace(/<\/>/gi, '</span>');  
  var TagMap = {};  for(var each in $.plugin('XML').tags){
  each.split(',').forEach(function(t){ TagMap[t.trim()] = $.plugin('XML').tags[each].render });
  } 
   for(var alias in TagMap){
   text = text.replace(RegExp('<'+alias+'', 'gi'), '<span class="' + alias + '"');
   text = text.replace(RegExp('<\/'+alias+'>', 'gi'), '</span>');
   }   m = $('<pre>' + text + '</pre>');   m.find("*").each(function(i,tag){   if (tag.tagName !== 'SPAN') tag.remove();    var tagName = tag.className.toLowerCase();   var attributes = {};   for(var at in tag.attributes) {   var n = tag.attributes[at].nodeName;
   var v = tag.attributes[at].value;  
   if (TagMap[tag.attributes[at]]) {t=tag.attributes[at]}
   if (TagMap[at]) {t=at}   for(var t in TagMap) {
    if (tag.getAttribute(t)){ n = t; v = true }
   }   if (n) attributes[n] = v;   
   }   attributes = JSON.parse(JSON.stringify(attributes));   for(var each in attributes) $(tag).removeAttr(each);   if (TagMap[tagName]){  
   var Attributes = {style:{}, classes:[]};   if(TagMap[tagName]) {    var attrs = TagMap[tagName](attributes, tag.innerText);
    for(var each in attrs) {
     if (each=='style') for(var CSSAttribute in attrs[each]) {
     Attributes.style[CSSAttribute] = attrs[each][CSSAttribute];
     } else if (each=='class') Attributes.classes.push(attrs[each]);
     else Attributes[each] = attrs[each];
    }   }   for(var t in attributes){ 
    if(TagMap[t]) {
     attrs = TagMap[t](attributes, tag.innerText);
     for(var each in attrs) {
     if (each=='style') for(var CSSAttribute in attrs[each]) {
     Attributes.style[CSSAttribute] = attrs[each][CSSAttribute];
      } else if (each=='class') Attributes.classes.push(attrs[each]);
      else Attributes[each] = attrs[each];
     }
    }
    }   for(var item in Attributes) {    if (item=='style') for(var CSSAttribute in Attributes.style) { 
    tag.style[CSSAttribute] = Attributes.style[CSSAttribute];
    } else if (item=='classes') tag.className = Attributes[item].join(' ');
    else tag[item] = Attributes[item];   }   }   });  
  return m[0].innerHTML;  } }); })();
(function(){




$.on('chat-channel-post', function(event, payload){
 payload.data.text = $.plugin('xml').render(payload.data.text);

});})();
(function(){$.plugin('xml').add("wide", {}, function(){ return {class:"wide"}});})();
(function(){
$.plugin('xml').add("wave", {}, function(opts, text){ var min = parseInt(opts.min);
 var max = parseInt(opts.max);

 if (!min || !max || max < min) {min=9; max=16;}
 if (min < 7) min = 7; 
 if (max > 20) max = 20;

 var s = text.split('');
 var o = [];
 var m = 1;
 var x = 11;
 s.forEach(function(char){
 if (x>max) m = 0;
 if (x<min) m = 1;
 if (m==1) x++;
 else x--;
 if (char==' ') o.push(char);
 else o.push('<i style="font-size:' + x + 'pt;">' + char + '</i>');
  });
 return {class:"rainbow", innerHTML: o.join('')}

});})();
(function(){$.plugin('xml').add("underline, u", {}, function(opts, text){
 return {class:"underline"}
});})();
(function(){$.plugin('xml').add("tiny", {}, function(){
 return {class:"tiny"}
});})();
(function(){

$.plugin('xml').add("strike, strikethrough", { "name":  "Strike",
 "description": "Draw a line through your text.",}, function(opts, text){ return {class:"strike"};});})();
(function(){
$.plugin('xml').add("small", {}, function(){
 return {class:"small"}
});})();
(function(){

$.plugin('xml').add("reverse", { "name":  "Reverse",
 "description": "Make your text order reversed.",}, function(opts, text){ return {class:"reverse", innerHTML:text.split('').reverse().join('')};});})();
(function(){$.plugin('xml').add("q, quote", {}, function(){ return {class:"quote"}});})();
(function(){

$.plugin('xml').add("overline", { "name":  "Overline",
 "description": "Draw a line over your text.",}, function(opts, text){ return {class:"overline"};});})();
(function(){$.plugin('xml').add("narrow", {}, function(){ return {class:"narrow"}});})();
(function(){

$.plugin('xml').add("italic", {}, function(opts, text){
 return {class:"italic"};
});})();
(function(){$.plugin('xml').add("huge", {}, function(){
 return {class:"huge"}
});})();
(function(){$.plugin('xml').add("hax", { "name":  "Hax",
 "description": "Some haxor text.",}, function(opts, text){ var map = {
  "A": "4",
  "B": "8",
  "l": "1",
  "S": "$",
  "a": "@",
  "G": "6",
  "T": "7",
  "E": "3",
  "O": "0",
  " ": "_",
  "\\(": "{",
  "\\)": "}"
 }; var fix = {
  "\\._": ". ", 
  "\\!_": "! ", 
  "\\?_": "? ", 
  "\\,_": ", "
 }; for(var letter in map) text = text.replace(new RegExp(letter, 'gi'), map[letter]); for(var item in fix)text = text.replace(new RegExp((item), 'g'), fix[item]); text = text.replace(/(\._|\?_|\!_|\,_)/gi, ' '); return {class:"hax", innerHTML:text};});})();
(function(){

$.plugin('xml').add("glow", { "name":  "Glow",
 "description": "Make your text glow.",}, function(opts, text){ var glow = "glow";
 console.log(opts); if (opts["1"]=="") glow+="-1";
 if (opts["2"]=="") glow+="-2";
 if (opts["3"]=="") glow+="-3";
 if (opts["4"]=="") glow+="-4";
 if (opts["5"]=="") glow+="-5"; return {class:glow};});})();
(function(){$.plugin('xml').add("flip", { "name":  "Flip",
 "description": "Flip your text.",}, function(opts, text){ return {class: "flip"};});})();
(function(){$.plugin('xml').add("script, code", {}, function(opts, text){
 return {class:"code"};
});})();
(function(){

$.plugin('XML').add("bold, strong, em", { "name":  "Bold Text.",
 "description": "Make your text bold.",}, function(opts, text){ return {class:"bold"};});})();
(function(){

$.plugin('XML').add("blur", { "name":  "Blur",
 "description": "Blur out some text.",}, function(opts, text){ return {class:'blur'};});})();
(function(){
$.plugin('XML').add("big", {}, function(){
 return {class:"big"}
});})();
(function(){$.plugin('XML').add("backwards", { "name":  "Backwards",
 "description": "Turn your text backwards.",}, function(opts, text){ return {class:"backwards", innerHTML:text.split('').reverse().join('')};});})();