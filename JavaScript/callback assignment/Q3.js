//## Question Three
//
// Write a function that take in a number and two callbacks.
//It should apply the first callback to the number,
//then the second callback, then return the result
//
// ```
// Input: 4, (num) => num + 3, (num) => num * 2
//
// Output: 14
//
// ```

function mainfun(num,callback1,callback2){
    //let num1=0
   // let num2=0

  let result1= callback1(num)
  let  result2=callback2(result1)
    
    return result2

}
let add= function(num){
  return num+3
   // console.log("ghhh")
   
}
let multiply= function(num){
    return num*2
}
console.log(mainfun(4, add, multiply));