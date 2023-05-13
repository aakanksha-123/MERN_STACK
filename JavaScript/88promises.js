console.log("started....")

/* simple function*/

setTimeout(function(){
    console.log("executed after 5 sec")
},5000)


/*using arrow function*/
setTimeout(()=>{
    console.log("executed after 5 sec")
},5000)

/* using varible to store function */
let fun=function(){
    console.log("executed after 5 sec")
}
setTimeout(fun,5000)
