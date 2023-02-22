
function receivesAFunction(callback){
    callback();
}
function callback(cat){
    return "cat"
}

function returnsANamedFunction(){
    return function dog(){ console.log("dog")}
}

function returnsAnAnonymousFunction(){
    return function(){console.log("dog")}
}