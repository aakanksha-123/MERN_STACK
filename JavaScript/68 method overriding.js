class A{
    show(){
        console.log("In A")
    }
}
class B extends A{
    show(){
        console.log("In B")
    }
}
let ob=new B()
ob.show()


