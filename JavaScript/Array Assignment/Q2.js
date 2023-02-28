//*/
//2.Write the function camelize(str) that changes dash-separated words like
 ///“my-short-string” into camel-cased “myShortString”.

//That is: removes all dashes, each word after dash becomes uppercased.
//*/
let s1="my-short-string"
console.log(s1)
let arr=s1.split("-")
console.log(arr)
let s2=" "
let y=0
arr.forEach(function name(n){
    if(y==0){
        s2=n
        return s2
    }
    let x=n.codepointat(0)-32
    n=n.replace(n.charAt(0),String.fromCharCode(x))
    s2+=n
    return s2
})
console.log(s2)