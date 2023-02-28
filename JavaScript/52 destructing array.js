let arr=[10,20,30,40,50,60]
//let x=arr[0]
//let y=arr[1]
//let z=arr[2]

let [x,y,z]=arr
console.log(x,y,z)

let [a,b]=arr
console.log(a,b)

///rest operator(...)
let[p,q,r,...arr4]=arr
console.log(p)
console.log(q)
console.log(r)
console.log(arr4)