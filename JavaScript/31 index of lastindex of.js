let s1="Helol World"
let x=s1.indexOf("l")
console.log(x)//2
x=s1.lastIndexOf("l")
console.log(x)//9
console.log("\n")




////////
let p=-1
let str="Helol world"
while(true){
    p=s1.indexOf("l",p+1)
    console.log(p)
    if(p==-1){
        break
    }
}