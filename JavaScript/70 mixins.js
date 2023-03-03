class user{
    constructor(name){
        this.name=name
    }
}

let message=class{
    sayHello(){
        console.log(`Hello ${this.name}`)
    }
}

Object.assign(user.prototype,message)
let obj=new user("ABC")
obj.sayHello()