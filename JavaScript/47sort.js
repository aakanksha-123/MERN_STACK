let arr=[1,2,15]
console.log(arr)
arr.sort()
console.log(arr)

//other way

function check(a,b){
    if(a==b) return 0
    if(a>b) return 1
    if(a<b) return -1
}
let arr1=[1,2,15]
arr1.sort(check)
console.log(arr)
