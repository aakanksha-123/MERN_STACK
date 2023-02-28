/*3. Write a  program to get a single string from two given strings, separated by a space and swap the first two characters of each string. 
Sample String : 'abc', 'xyz' 
Expected Result : 'xyc abz' */
let s1="abc"
let s2="xyz"
//let s3=s1.substring(0,2)//ab
let s4=s1.replace(s1.substring(0,2),s2.substring(0,2))
let s5=s2.replace(s2.substring(0,2),s1.substring(0,2))

console.log(s4+" "+s5)