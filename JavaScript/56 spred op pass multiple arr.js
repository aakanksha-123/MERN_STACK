function sum(...arr){
    let z=0
    arr.forEach(n=>{
        z=z+n
    })
    return z;
}
let arr2=[1,2,3,4,5]
let arr3=[6,7,8,9]

let a=sum(...arr2,...arr3)
console.log(a)//45

//combine spred syntax with multiple values (individual)
let b=sum(10,...arr2,40,...arr3)
console.log(b)

//multiple arrays can be used to merged array (we can merged individual values with arrray)

let c=[10,...arr2,40,...arr3]
console.log(c)