
$.plugin('xml').add("wave", {}, function(opts, text){
    
    var min = parseInt(opts.min);
    var max = parseInt(opts.max);

    if (!min || !max || max < min) {min=9; max=16;}
    if (min < 7) min = 7; 
    if (max > 20) max = 20;

    var s = text.split('');
    var o = [];
    var m = 1;
    var x = 11;
    s.forEach(function(char){
    	if (x>max) m = 0;
    	if (x<min) m = 1;
    	if (m==1) x++;
    	else x--;
    	if (char==' ') o.push(char);
    	else o.push('<i style="font-size:' + x + 'pt;">' + char + '</i>');
        });
    return {class:"rainbow", innerHTML: o.join('')}

});