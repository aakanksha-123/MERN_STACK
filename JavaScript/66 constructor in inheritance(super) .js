class A{
    constructor(){
        console.log("In A constructor")   
    }
}

class B extends A{
    constructor(){
        super()   //parent class constructor get called
        console.log("In B constructor")
    }
}
let obj=new B()
