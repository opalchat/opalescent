/*globals $*/
$.app('data', {
   
   "pane": function(which){
      
       $(".portal-Data main > div").each(function(i,element){
          
         if (!new RegExp(which).test(element.id)) {
             
             $(element).attr('style', 'display:none');
             
         } else {
             $(element).attr('style','display:block');
             console.log('viewing: apps.data.' + which);
             $('#' + element.id).html($.View('apps.data.' + which, $.my));
         }
         
      });
    
    }
    
});