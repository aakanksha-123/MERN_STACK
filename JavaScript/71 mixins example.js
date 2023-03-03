class add{


    constructor(n1,n2){
        this.n1=n1
        this.n2=n2

    }
    addition(n1,n2){
        console.log(n1+n2)
    }
}

let sub=class{
    subtraction(n1,n2){
        
        console.log(n1-n2)
    }
}

let obj=new add(4,5)
obj.addition(5,6)
obj.subtraction(7,8)