//function expression means complete function assign to a value
//example 1
let hello=function(){
    console.log("Hello World")
    console.log("this is function expression")
}
console.log(typeof hello) //function
hello()

//example 2
let add=function(x,y){
    let z=x+y
    return z
}
let p=add(100,200)
console.log(p)

//another way to declare the function to the variable
function area(r){
    let a=3.14*r*r
    return a
}
let cal=area
let b=cal(1.2)
console.log(p)

