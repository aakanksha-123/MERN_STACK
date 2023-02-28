class Student{
    constructor(name){
        console.log("constructor called")
        this.name=name
    }
    sayHello(){
        console.log("Hello"+this.name)
    }
    
}

let s1=new Student("abc")
let s2=new Student("xyz")
s1.sayHello()
s2.sayHello()