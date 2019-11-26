$.plugin('xml').add("hax", {
   
   "name":          "Hax",
   "description":   "Some haxor text.",
   
}, function(opts, text){
    
    var map = {
        "A": "4",
        "B": "8",
        "l": "1",
        "S": "$",
        "a": "@",
        "G": "6",
        "T": "7",
        "E": "3",
        "O": "0",
        " ": "_",
        "\\(": "{",
        "\\)": "}"
    };
    
    var fix = {
        "\\._": ". ", 
        "\\!_": "! ", 
        "\\?_": "? ", 
        "\\,_": ", "
    };
    
    for(var letter in map) text = text.replace(new RegExp(letter, 'gi'), map[letter]);
    
    for(var item in fix)text = text.replace(new RegExp((item), 'g'), fix[item]);
    
    text = text.replace(/(\._|\?_|\!_|\,_)/gi, ' ');
    
    return {class:"hax",  innerHTML:text};
    
});