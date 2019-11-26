<* var compiled; -*>
<*  // Load JS from core directory.
    compiled = {};
    fs.readdirSync(`${dir}`).forEach(function(app){
        
        function loop(directory){
            
            directory = directory.replace(/\/\//gi, '/');
            
            if (/^apps/gi.test(directory)) return false;
             
            if (fs.statSync(`${dir}/${directory}`).isDirectory()) {
            
                fs.readdirSync(`${dir}/${directory}`).forEach(function(file){
                
                    if (!file.split(".")[1]) loop(directory + '/' + file);
                    
                    else if (file.split('.')[1] == 'ejs') { 
                        var d = fs.readFileSync(`${dir}/${directory}/${file}`).toString();
                        d = d.replace(/\t/gi, ' ');
                        d = d.replace(/ {2,5}/gi,' ');
                        d = d.replace(/\n {1,100}\n/gi,'');
                        
                        var n = `${directory.replace(/\/{1,5}/gi, '.')}.${file.split(".")[0]}`;
                        
                        compiled[n] = d.trim();
                    }
                    
                });
            
            }
            
        }
        
        loop(app);
        
    }); 
-*>
/* OPAL VIEWS
 * 
 * Compiled views.
 */
$.views = <*-JSON.stringify(compiled,false,1)-*>