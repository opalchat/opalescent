/*globals $*/

$.plugin('XML').add("blur", {
   
   "name":          "Blur",
   "description":   "Blur out some text.",
   
}, function(opts, text){
     
    return {class:'blur'};
    
});