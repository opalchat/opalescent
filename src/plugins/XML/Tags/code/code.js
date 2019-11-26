$.plugin('xml').add("script, code", {}, function(opts, text){
    return {class:"code"};
});