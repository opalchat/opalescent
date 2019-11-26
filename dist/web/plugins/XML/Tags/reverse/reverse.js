/*globals $*/

$.plugin('xml').add("reverse", {
   
   "name":          "Reverse",
   "description":   "Make your text order reversed.",
   
}, function(opts, text){
    
    return {class:"reverse", innerHTML:text.split('').reverse().join('')};
    
});