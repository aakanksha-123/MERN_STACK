function sayHello(fname="xyz"){
    console.log("Hello "+fname)
}
function add(x=0,y=0){
    let z=x+y
    console.log("Addition is "+z)
}
sayHello("abc")
sayHello()
add()
add(100)
add(100,200)