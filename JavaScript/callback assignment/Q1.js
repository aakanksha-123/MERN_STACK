//# Callback Exercises
//## Question One
//
// Write a function that takes in a callback and calls the callback
//
// ```
// Input:
// function() { console.log("Hello!") }
// Output:
// Logs "Hello!" to the console



function sayHello(fun){
    fun();
}
let hello=function(){
    console.log("Hello world")
}
sayHello(hello)