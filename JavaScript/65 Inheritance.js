class A{
    show(){
        console.log("In A Class")
    }
}
class B extends A{
    display(){
        console.log("In B class")
    }
}

let obj=new B()
obj.show()
obj.display()
