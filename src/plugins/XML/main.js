/*globals $*/ 
    $.plugin('XML', {
        
        "version": "Opal Markup 1.0",
        "author":   "tyler@iohq.org",
        
        "tags": {},
        
        "add": function(selector, description, renderer){
            $.plugin('XML').tags[selector] = description;
            $.plugin('XML').tags[selector].render = renderer;
        },
        
        "render": function(m){
         
           var text = m.replace(/<\/>/gi, '</span>');
        
          // For referencing supported tags.
          var TagMap = {};
        
          for(var each in $.plugin('XML').tags){
        	 each.split(',').forEach(function(t){ TagMap[t.trim()] = $.plugin('XML').tags[each].render });
          } 
           for(var alias in TagMap){
            text = text.replace(RegExp('<'+alias+'', 'gi'), '<span class="' + alias + '"');
            text = text.replace(RegExp('<\/'+alias+'>', 'gi'), '</span>');
           }
        
           m = $('<pre>' + text + '</pre>');
        
           m.find("*").each(function(i,tag){
        
            if (tag.tagName !== 'SPAN') tag.remove();
        
                var tagName = tag.className.toLowerCase();
        
            var attributes = {};
         
            for(var at in tag.attributes) {
        
            	var n = tag.attributes[at].nodeName;
            	var v = tag.attributes[at].value;
            	
        
            	if (TagMap[tag.attributes[at]]) {t=tag.attributes[at]}
            	if (TagMap[at]) {t=at}
        
            	for(var t in TagMap) {
                if (tag.getAttribute(t)){ n = t; v = true }
            	}
        
            	if (n) attributes[n] = v;	
        
        
            }
        
            attributes = JSON.parse(JSON.stringify(attributes));
             
            for(var each in attributes) $(tag).removeAttr(each);
        	  
            if (TagMap[tagName]){
         
        
            	var Attributes = {style:{}, classes:[]};
        
            	if(TagMap[tagName]) {
            
                    var attrs = TagMap[tagName](attributes, tag.innerText);
                    for(var each in attrs) {
                    	if (each=='style') for(var CSSAttribute in attrs[each]) {
                        Attributes.style[CSSAttribute] = attrs[each][CSSAttribute];
                    	} else if (each=='class') Attributes.classes.push(attrs[each]);
                    	else Attributes[each] = attrs[each];
                    }
                    
            	}
        
            	for(var t in attributes){ 
                    if(TagMap[t]) {
                    	attrs = TagMap[t](attributes, tag.innerText);
                    	for(var each in attrs) {
                    	   if (each=='style') for(var CSSAttribute in attrs[each]) {
                    	  	 Attributes.style[CSSAttribute] = attrs[each][CSSAttribute];
                            } else if (each=='class') Attributes.classes.push(attrs[each]);
                            else Attributes[each] = attrs[each];
                        }
                    }
                }
                
            	for(var item in Attributes) {
        
                if (item=='style') for(var CSSAttribute in Attributes.style) { 
                	tag.style[CSSAttribute] = Attributes.style[CSSAttribute];
                } else if (item=='classes') tag.className = Attributes[item].join(' ');
                else tag[item] = Attributes[item];
        
            	}
        
            }
         
            });
        
        
        	return m[0].innerHTML;
        
        }
    
    }); 