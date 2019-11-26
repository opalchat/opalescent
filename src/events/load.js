/*globals $*/



$.load = function(){
    
    var $log = $.logging('Loader');
 
    
    var c = 0, todo = [
        
    /*Load Memory*/
    function Load_Memory(next){
      
        $.memory = {};
        try {
           $.memory = JSON.parse($.cookie('opal_memory')); 
        } catch (e) {/*Memory corrupted, or whatever.*/}
        
        // Save memory on interval.
        $.memorySync = setInterval(function(){
            $.cookie('opal_memory', JSON.stringify($.memory));
        }, 1000);
        
        next();
        
    },
        
    /*Load User Details*/
    function Load_User(next){
        
        $log('Loading UserData...');
        $.me = $.my = {authed:false};
        next();
        
    },
        
    /*Load Instance Details*/
    function Load_Instance(next){
        
        $log('Loading Instance...');
        $.instance = {
            id: $.uid(),
            name:   "Opal Portal",
            domain: "lab.iohq.org"
        };
        
        next();
        
    },
    
    function Load_Apps(next){
        
        $.Appnav.init();
        
        next();
        
    },
    
    function Load_Contacts(next){
        
        next();
        
    },
    
    function Load_Portal(next){
        
       $.Portal.init();
       next();
        
    }
    
    
];
    
var load = function(){
    
    if (typeof todo[c] == 'function'){
        
        todo[c](function(){
            c++;
            load();
        });
        
    } else {
        
        $log('Loader is done.');
        
    }
    
};

    load();
    
};
