/****list of prameter converted to array**********/
function sum(...arr){
    let z=0;
    arr.forEach(n=>{
        z=z+n;
    })
    return z;
}
let a=sum(10,20)
console.log(a)//30
a=sum(10,20,30)
console.log(a)//60

/***********array conv56erted to list of parameters**********/
let arr2=[1,2,3,4]
ans=sum(...arr2)
console.log(ans)
