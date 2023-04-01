/*6.Type conversions
a. "" + 1 + 0
b. "" - 1 + 0
c. true + false
d. 6 / "3"
e. "2" * "3"
f. 4 + 5 + "px"
g. "$" + 4 + 5
h. "4" - 2
i. "4px" - 2
j. " -9 " + 5
k. " -9 " - 5
l. null + 1
m. undefined + 1
n. " \t \n" – 2  */

a= "" + 1 + 0
console.log(a)//10
console.log(typeof(a))//string

b="" - 1 + 0
console.log(b)//-1
console.log(typeof(b))//number

c= true + false
console.log(c)//1
console.log(typeof(c))//number

d= 6 / "3"
console.log(d)//2
console.log(typeof(d))//number

e="2" * "3"
console.log(e) //6
console.log(typeof(e)) //number

f= 4 + 5 + "px"
console.log(f) //9px
console.log(typeof(f)) //string

g= "$" + 4 + 5
console.log(g) //$45
console.log(typeof(g)) //string

h="4" - 2
console.log(h) //2
console.log(typeof(g))//string

i= "4px" - 2
console.log(i) //Nan
console.log(typeof(i)) //number

j=" -9 " + 5
console.log(j) //-9 5
console.log(typeof(j))//string


k= " -9 " - 5 
console.log(k) //-14
console.log(typeof(k))//number


l= null + 1
console.log(l) //1
console.log(typeof(l)) //number


m= undefined + 1
console.log(m) //Nan
console.log(typeof(m))//number


n= " \t \n" -2
console.log(n)//-2
console.log(typeof(n)) //number