/*globals $*/

$.plugin('XML').add("bold, strong, em", {
   
   "name":          "Bold Text.",
   "description":   "Make your text bold.",
   
}, function(opts, text){
    
    return {class:"bold"};
    
});