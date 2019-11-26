/*globals $*/


/*
Queues batch asynchonous calls. The next will call once the active task has resolved, rejected or timed out.
*/


$.Queue = function(qid){
    
    /** Initialize queue. **/
    if ( !$.queue.queues ) $.queue.queues = {};
     
    
    if (qid) return $.queue.queues[qid];
    
    var id = $.uid(), 
        a = (arguments[0] || {}),
        Q = {
        
        "timeout":      a.timeout     || 5000,
        "expiration":   a.expiration  || 30000,
        "interval":     a.interval    || 1000,
        
        "id":           id,
        "queue":        [],
        
        "add": function(details){
            
            var d = {};
            
            if (typeof details == 'object')     d = details;
            if (typeof details == 'function')   d.operation = details;
            
            d.added = Date.now();
            
            if (!d.operation) throw Error('Missing operation parameter.');
            
            Q.queue.push(d);
            $(Q).trigger('queue-task-add', d);
            
            return Q.queue[Q.queue.length-1];
            
        },
        
        "tick": function(){
            
          
            var t = Q.queue[0];
            
            if (!t) return $(Q).trigger('queue-empty');
            
            if (t.busy) return false;
            
            t.busy = Date.now();
            t.done = function(type){
                return (function(result){
                    if (t.cancelled) return false;
                    t.status = result;
                    t.complete = Date.now();
                    $(Q).trigger('queue-task-' + type, t);
                    console.info("Task " + type + " in queue " + id + ": ", {task:t});
                });
            };
            
            if ((Date.now() - t.added) >= (t.expiration || Q.expiration)) return t.done('expire')();
            
            t.operation(
                t.done('resolve'), 
                t.done('reject')
            );
            
        }
        
    };
    
    Q.worker = new Worker('worker.js');
    
    $.queue.queues[id] = Q;
    $(Q).trigger('start');
    
    var i = Q.add;
    for(var each in Q) i[each] = Q[each];
    return i;
    
};