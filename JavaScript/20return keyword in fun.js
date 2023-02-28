function sayHello(fname="xyz"){
    let mssg="Hello"+fname
    return mssg
}
function add(x=0,y=0){
    let z=x+y
    return z
}
let p=add(10,20)
console.log("Addition is "+p)
let mssg=sayHello("abc")
console.log(mssg)