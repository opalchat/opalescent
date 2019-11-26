
<* var compiled; -*>
<*  // Load JS from core directory.
    compiled = [];
    fs.readdirSync(`${dir}/apps`).forEach(function(app){
        
        if (fs.statSync(`${dir}/apps/${app}`).isDirectory()) {
               
              try {
                var d = JSON.parse(fs.readFileSync(`${dir}/apps/${app}/app.json`).toString());
                d.directory = `/apps/${app}`
                compiled.push(d);   
             } catch (e) {} 
        }
        
    }); 
-*>
/* OPAL Apps
 * 
 * Compiled manifests from Opal apps.
 */

/*globals $*/


$.apps = <*-JSON.stringify(compiled,false,1)-*>;



<* var compiled, chars = 0, lines = 0, toread = {}, views = {}, currapp = null; -*>
<*  // Load JS from core directory.
    compiled = [];
    fs.readdirSync(`${dir}`).forEach(function(app){
        
        function loop(directory){
             
            directory = directory.replace(/\/\//gi, '/');
            console.log(directory);
            if (!/apps/i.test(directory)) return false;
            
            if (fs.statSync(`${dir}/${directory}`).isDirectory()) {
            
                fs.readdirSync(`${dir}/${directory}`).forEach(function(file){
                
                    var d = null;
                    
                    try {
                        d = fs.readFileSync(`${dir}/${directory}/${file}`).toString();
                    } catch (e) {};
                    
                    if (file.split('.')[1] == 'js') { 
                        chars += Number(d.length);
                        lines += Number(d.split('\n').length); 
                        d = d.replace(/\t/gi, ' ');
                        d = d.replace(/ {2,5}/gi,' ');
                        d = d.replace(/\n {1,100}\n/gi,'');
                        d = d.replace(/\( {1,5}\)/gi,'()');
                        toread[`${dir}/${directory}/${file}`] = '(function(){' + d + '})();';   
                    } else if (file.split('.')[1] == 'json') {
                        
                        try {
                            var app = JSON.parse(d);
                            if (app.id) currapp = app.id;
                        } catch (e) {}
                        
                    } else if (file.split('.')[1] == 'ejs') { 
                        var d = fs.readFileSync(`${dir}/${directory}/${file}`).toString();
                        d = d.replace(/\t/gi, ' ');
                        d = d.replace(/ {2,5}/gi,' ');
                        d = d.replace(/\n {1,100}\n/gi,'');
                        
                        var n = file.split(".")[0];
                        
                        views[currapp + '.' + n] = d.trim();
                    } else if (!file.split(".")[1]) loop(directory + '/' + file);
                    
                    
                });
            
            }
            
        }
        
        loop(app);
        
    }); 
    *>

    <*
    var tosort = [];
    for(var each in toread) tosort.push(each);
    tosort = tosort.sort(function(a,b){return a.split('/').length-b.split('/').length}).sort().reverse();
    
    -*> 
    /**
    <*-JSON.stringify(tosort,false,2)*>
    **/
    <*-tosort.forEach(function(file){
        compiled.push(toread[file]);
    });-*>

    <* 
    var output = compiled.join('\n');
    -*>

 
<*
for(var each in views){
    *> 
$.views['apps.<*-each-*>'] = <*-JSON.stringify(views[each])-*>;
    <*
}
*>;
<*-output-*>