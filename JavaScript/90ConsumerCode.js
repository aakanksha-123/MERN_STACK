
let p=new Promise(function(resolve,reject){
    console.log("Executoe Code")
    /* using simple function*/
   // setTimeout(function(){resolve("Got data from server")},5000)

    /* using Arrow function*/
    setTimeout(()=>resolve("Got data from server"),5000)
    setTimeout(()=>reject("Error Ocuured!"),5000)
})
//consumer call using then
p.then(function(value){
    console.log("OK")
    console.log(value)
}, function(error){          //2nd call get skipped
    console.log("Exception")
    console.log(error)
}
)

