/*globals $*/

$.app('auth', {
   
   "overview": function(){
       
       /* Use this to force profile updates before continuing. */
       
       var $log = $.logging('auth-overview');
       $.app('auth').check(function(){
           
           console.log($.my.name);
           
           $log('Checking Profile Items...', $.my);
           
           $.app('auth').pane('overview', {name:$.my.name});
           
       });
       
   }
   
});