let arr=[10,20,30,40,50,60]
console.log(arr)

//long way by which we can retrieve array elements
function show(n){
    console.log(n)
}
arr.forEach(show)


console.log("\n")


//using arrow function
arr.forEach((n)=>console.log(n))
arr.forEach(n=>console.log(n))