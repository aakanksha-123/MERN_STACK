//1st way
function hello(callback){
    console.log(callback())
}
function sayHello()
{
    console.log("Hello everyone")
}
hello(sayHello)





//2nd way
/*
function sayHello(fun){
    fun()
}
let hello=function(){
    console.log("Hello World")
}
sayHello(hello)
*/