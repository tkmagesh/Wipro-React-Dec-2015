Array.prototype.invokeEach = function(){
    for(var i=0; i<this.length; i++)
        if (typeof this[i] === 'function')
            this[i].apply(this, arguments);
}

/* Sync */

function addSync(x,y){
    console.log("[Provider] processing ", x , " and ", y);
    var result = x + y;
    console.log("[Provider] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[Consumer] triggering addSync");
    var result= addSync(x,y);
    console.log("[Consumer] result = ", result);
}

/* Async Using Callbacks*/
function addAsync(x,y, onResult){
    console.log("[Provider] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[Provider] returning result");
        //return result;
        if (typeof onResult === 'function')
            onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log("[Consumer] triggering addAsync");
    addAsync(x,y, function(result){
        console.log("[Consumer] result = ", result);
    });
}

/* Async Using Events */
var asyncAdder = (function(){
    var callbacks = [];
    function add(x,y){
        console.log("[Provider] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[Provider] returning result");
            /*callbacks.invokeEach(result);*/
            for(var i=0; i<callbacks.length; i++){
                var callback = callbacks[i];
                if (typeof callback === 'function')
                    callback(result);
            }
        },3000);
    }
    function onResult(subscriptionFn){
        callbacks.push(subscriptionFn);

    }
    return {
        add : add,
        onResult : onResult
    };
})();

/* Async Using Promise*/

function addAsyncPromise(x,y){
    console.log("[Provider] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
         setTimeout(function(){
            var result = x + y;
            console.log("[Provider] returning result");
            resolve(result);
         },3000);
    });
    return promise;
}










