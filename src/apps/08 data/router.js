/*globals $*/

            

$.app("data", {
     
     
    "router": {
        
      "set": {
          
        "title": "Signin",
        "description": "",
        "render": function(){
            $.app('data').pane('dataset-signin');
        }
         
      },
      
      "set/new": {
          
        "title": "Create a new dataset.",
        "description": "",
        "render": function(){
            $.app('data').pane('dataset-new');
        }
         
      },
      
      
      "set/edit": {
          
        "title": "Edit a dataset.",
        "description": "",
        "render": function(){
            $.app('data').pane('dataset-edit');
        }
         
      },
      
      "set/sync": {
          
        "title": "Sync a dataset with an external source.",
        "description": "",
        "render": function(){
            $.app('auth').pane('email-signup');
        }
         
      }
        
        
    }

    
    
    
});