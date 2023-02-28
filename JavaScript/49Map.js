//create map object
let m1=new Map()

//add items to map
m1.set(1,"aaa")
m1.set(2,"bbb")
m1.set(3,"ccc")
m1.set(1,"test")
console.log(m1)
/*
//get
let v=m1.get(2)
console.log(v)


//delete
m1.delete(3)
console.log(m1)

//clear
m1.clear()
console.log(m1)


//has
let f=m1.has(1)
console.log(f)
f=m1.has(5)
console.log(f)



////key///
let mykeys=m1.keys()
for(const x of mykeys){
    console.log(x)
}

///values/////
for(const v of m1.values){
    console.log(v)
}


///entries/////
for(const item of m1.entries){
    console.log(item[0],item[1])
}
*/
///////
console.log('******************')
m1.forEach(function(v,k){
    console.log(k,v)
})

//create map manually
let m2=new Map([1,'abc'],[2,'xyz'])
console.log(m2)