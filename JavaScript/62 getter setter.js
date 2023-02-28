class Student{
    constructor(name){
        this._name=name  //private variable only indicate that another programmer to do not scess it outside the class
    }
    get name(){
        console.log("get method called")
        return this._name 
    }
    set name(n){
        console.log("set method called")
        this._name=n
    }
}
let obj=new Student("abc")
console.log(obj.name)//private variable we can acess it outside the class
obj.name="xyz"//set method

let fname=obj.name //get method
console.log(fname)
