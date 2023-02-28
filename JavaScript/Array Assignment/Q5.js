/*

Sort in decreasing order


let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10


*/
let arr=[5,2,1,-10,8]
function check(a,b){
    if(a==b) return 0
    if(a>b) return 1
    if(a<b) return -1
}
y=arr.sort(check).reverse()
console.log(y)