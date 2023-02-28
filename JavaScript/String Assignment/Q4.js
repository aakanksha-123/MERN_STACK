/* 4. Write a   program to get a string made of the first 2 and the last 2 chars from a given a string. If the string length is less than 2, return instead of the empty string. 
Sample String : Hello World'
Expected Result : 'Held' */
let s1="Hello World"
let length=s1.length
let s2=s1.substring(0,2)
let s3=s1.substring(length-2,length)
console.log(s2+s3)