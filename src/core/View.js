/* globals $ */
$.View = function(name, props){
    props.my = $.me;
    props.instance = $.instance;
    var v = null;
    for (var view in $.views){ 
       if (name.toLowerCase() == view.toLowerCase()) v = $.views[view];
    };
    if (v) {
        return $.ejs.render(v.replace(/\{\{/gi, '<%').replace(/\}\}/gi, '%>'), props);
    }
}