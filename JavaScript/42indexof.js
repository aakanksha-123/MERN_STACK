
let arr=[120,20,30,10,20,10,23,10]
x=-1
while(true){
    x=arr.indexOf(10,x+1)
    console.log(x)
    if(x==-1){
        break
    }
}