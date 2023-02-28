let arr=[10,20,30,40,50,60,70,80,90]
let arr1=[]
for(i=0;i<arr.length;i++){
    let y=arr[i]*arr[i]
    arr1.push(y)                           //used map when we wnat to convert one value to new value

}
console.log(arr1)

//simpler way
arr2=arr.map(n=>n*n) //using arrow function
console.log(arr2)

arr3=arr.map(function(n){   //using directly function
    return n*n
})