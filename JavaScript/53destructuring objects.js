let user={id:100,name:'abc',address:'xyz'}
//let {id,name,address}=user
//console.log(id)

//order of variable does not matter in lefthand side
//let {name,id,address}=user
//console.log(id)

/*
let{id,name}=user
console.log(id)
console.log(name)
*/

let {id:x,name:n,address:adr}=user
console.log(x)
console.log(n)