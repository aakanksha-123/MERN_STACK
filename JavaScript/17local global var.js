//global variable(outer)
let fname="abc"
function sayHello(){
    //local variable
    let age=20
    console.log('Hello '+fname)
    console.log('Your age is '+age)
}
sayHello()
console.log(fname)
//console.log(age)//throw an error because it is a local var cannot acess outside the function