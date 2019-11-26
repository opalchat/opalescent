$.plugin('XML').add("backwards", {
   
   "name":          "Backwards",
   "description":   "Turn your text backwards.",
   
}, function(opts, text){
    
    return {class:"backwards",  innerHTML:text.split('').reverse().join('')};
    
});