/*let stud=class{
    sayHello(){
        console.log("Hello World")
    }
}
let obj=new stud();
obj.sayHello()
*/

function show(stud1){  //passed whole class get stored in paameter stud1
  let obj=new stud1()   //we have created object of parameter
  obj.sayHello()
}

let stud=class{
    sayHello(){
        console.log("Hello world")
    }
}

show(stud)  //pass whole class to the function