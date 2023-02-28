let s1=new Set([1,2,3,4,1,2,1]) //duplicate are not allowed
//by using for loop
for(const x of s1){
    console.log(x)
}
console.log(s1)

//add
s1.add(8)
console.log(s1)

//has
console.log(s1.has(9))
console.log(s1.has(2))

//delete
s1.delete(8)
console.log(s1)

//clear
s1.clear()

//size
console.log(s1.size)