class Area{
    constructor(radius){
        this.radius=radius
    }
    calculateArea(){
        this.area=3.14*this.radius*this.radius
    }
    showArea(){
        console.log(`Area is ${this.area}`)
    }
}

//get all method names
console.log(Object.getOwnPropertyNames(Area.prototype))
let ob=new Area(1.2)
ob.calculateArea()
ob.showArea()