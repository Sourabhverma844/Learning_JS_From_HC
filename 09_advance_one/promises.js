// hum promises create kar sakte he par You may feel ki jyadatar hum promises consume hi karte he.
// pahle hum promises ko js ki promise libraries ke through acess karte the like Q or BlueBird but now we have ES6 promises.

// lets create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do a async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
})
//resolve ka connection he .then ke sath
promiseOne.then(function(){
    
})