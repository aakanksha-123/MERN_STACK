//normal way
function areas(r){
    let a1=3.14*r*r
    return a1
}
let x=areas(1.2)
console.log(x)

//using arrow function
let area=(r)=>3.14*r*r  //() is optional for one argument
let p=area(1.2)
console.log(p)