
let p=new Promise(function(resolve,reject){
    //executor code
    //producing code
    //get data from server side
    console.log("Executor code")
    /*using arrow function*/
    setTimeout(()=>console.log("Executed after 5 sec"),5000)
    /*using simple function*/
   // setTimeout(function(){console.log("Executed after 5 sec")},5000)
}
)