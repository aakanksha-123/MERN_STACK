/* 20.Output prime numbers
a. For n = 10 the result will be 2,3,5,7. */ 

let count=0
let i,j 
for(j=2;j<=10;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0


  
}
