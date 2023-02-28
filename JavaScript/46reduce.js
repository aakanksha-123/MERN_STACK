let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0
//userdefined function
for(let i=0;i<arr.length;i++){  
    sum=sum+arr[i]
}
console.log(sum)//55

//using arrow function
let v1=arr.reduce((sum,n)=>sum+n,0)
console.log(v1)//55

//using function
let v2=arr.reduce(function(sum,n){
    return sum+n
},1)
console.log(v2)//56