class Animal{
    talk(){
        console.log("Animal makes sound")
    }
}
class Dog extends Animal{
    talk(){
        console.log("Bow bow....")
    }
}
class Duck extends Animal{
    talk(){
        console.log("Quack quack.....")
    }
}
let obj=new Dog()
obj.talk()

let obj2=new Duck()
obj2.talk()