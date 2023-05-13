
let p=new Promise(function(resolve,reject){
    console.log("Send Request to server !!")
    setTimeout(function name(){
        resolve("Got Data")
        //reject("Error")
    },5000)
})

/* Declaring consumer*/
//1st method
p.then(function(value){ 
    console.log(value)  //sucessfully data received 
},function(error){
    console.log(error)  //error occured
})

//2nd method 
p.then(function(value){
    console.log(value)
},null)  //second fun which handle error tyala apn null kel (second parameter null put kel)

//3rd method
p.then(null,function(error){  // first parameter null put kel 
   
    console.log(error)
})

//4th method
p.catch(function(error){
    console.log("In catch")  // catch only error using the catch
    console.log(error)
})

//5th method
p.then(function(value){
    console.log(value)
},function(error){
    console.log(error)
})
p.finally(()=>console.log("Always executed"))