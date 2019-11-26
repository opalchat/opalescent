$.plugin('xml').add("flip", {
   
   "name":          "Flip",
   "description":   "Flip your text.",
   
}, function(opts, text){
    
    return {class: "flip"};
    
});