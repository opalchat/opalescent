
<* var compiled; -*>
<*  // Load JS from core directory.
    compiled = [];
    fs.readdirSync(`${dir}/plugins`).forEach(function(app){
        
        if (fs.statSync(`${dir}/plugins/${app}`).isDirectory()) {
               
              try {
                var d = JSON.parse(fs.readFileSync(`${dir}/plugins/${app}/plugin.json`).toString());
                d.directory = `/plugins/${app}`
                compiled.push(d);   
             } catch (e) {} 
        }
        
    }); 
-*>
/* OPAL Plugins
 * 
 * Compiled manifests from Opal plugins.
 */

/*globals $*/


$.plugins = <*-JSON.stringify(compiled,false,1)-*>;



<* var compiled, chars = 0, lines = 0, toread = {}; -*>
<*  // Load JS from core directory.
    compiled = [];
    fs.readdirSync(`${dir}`).forEach(function(app){
        
        function loop(directory){
             
            directory = directory.replace(/\/\//gi, '/');
            
            if (!/plugins/.test(directory)) return false;
            
            if (fs.statSync(`${dir}/${directory}`).isDirectory()) {
            
                fs.readdirSync(`${dir}/${directory}`).forEach(function(file){
                
                console.log(`${dir}/${directory}/${file}`);
                    
                    if (file.split('.')[1] == 'js') { 
                        var d = fs.readFileSync(`${dir}/${directory}/${file}`).toString();
                        chars += Number(d.length);
                        lines += Number(d.split('\n').length);
                        d = fn.uncomment(d); 
                        d = d.replace(/\t/gi, ' ');
                        d = d.replace(/ {2,5}/gi,' ');
                        d = d.replace(/\n {1,100}\n/gi,'');
                        d = d.replace(/\( {1,5}\)/gi,'()');
                        toread[`${dir}/${directory}/${file}`] = '(function(){' + d + '})();';   
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


 
<*-output-*>