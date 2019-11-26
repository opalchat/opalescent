/*globals $*/

$.plugin('xml').add("overline", {
   
   "name":          "Overline",
   "description":   "Draw a line over your text.",
   
}, function(opts, text){
    
    return {class:"overline"};
    
});