/*globals $*/

$.plugin('xml').add("strike, strikethrough", {
   
   "name":          "Strike",
   "description":   "Draw a line through your text.",
   
}, function(opts, text){
    
    return {class:"strike"};
    
});