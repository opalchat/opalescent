/* Maintain the Queues. */
setInterval(function(){
    
    console.log('Worker is running.', self);
    
    $.Queue.queues.forEach(function(instance){
        var task = instance.queue[0];
        if (task) {
            if (task.done) {
                instance.queue.splice(0,1);
            }
        }
    });
    
},100);
