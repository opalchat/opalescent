/*globals $*/
$.Objects = [];
$o = $.Object = function(name, config){
    $.Objects.forEach(function(o){
       var what;
       if (name.toLowerCase() == o.name.toLowerCase()) what  = o;
       return what;
    });
};
$.Object.create = function(name, config){
    if (typeof config == 'object') {
        config.name = name;
        $.Objects.push({config:config});
    }
};