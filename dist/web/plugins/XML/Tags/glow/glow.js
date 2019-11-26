/*globals $*/

$.plugin('xml').add("glow", {
   
   "name":          "Glow",
   "description":   "Make your text glow.",
   
}, function(opts, text){
    
    var glow = "glow";
    console.log(opts);
    
    if (opts["1"]=="") glow+="-1";
    if (opts["2"]=="") glow+="-2";
    if (opts["3"]=="") glow+="-3";
    if (opts["4"]=="") glow+="-4";
    if (opts["5"]=="") glow+="-5";
    
    return {class:glow};
    
});