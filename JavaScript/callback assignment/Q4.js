//## Question Four
//
// You are given the following functions:
// ```js
//
/*
function conservativeSpender(balance) {
 return balance > 100;
};
function liberalSpender(balance) {
 return balance > 10;
};
function horribleSaver(balance) {
 return balance > 0;
};
// ```
//
// Write a function `shouldIBuyThis` that takes in a balance and a
//callback (one of the above functions). The function should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
//
// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs: "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"
//
// ```
function shouldIBuyThis(balance, callBack) {
 let cani = callBack(balance);
 if (cani) {
 return "Sure! I've got money";
 } else {
 return 'Nope! I gotta keep my savings up!';
 }
};
console.log(shouldIBuyThis(10, horribleSaver)); */
function shouldBuyThis(balance,callback){
    let cost= callback(balance)
    if(cost){
        return "sure i have got money"
    }else{
        return "nope! gotta keep savings up"
    }
    
    }
    function conservativeSpender(balance){
        return balance>100;
    }
    function liberalSpender(balance){
        return balance>10;
    }
    function horribleSaver(balance){
        return balance>0;
    }
    
    
    
    console.log(shouldBuyThis(20,conservativeSpender))
    console.log(shouldBuyThis(10,horribleSaver))
    console.log(shouldBuyThis(20,liberalSpender))
    console.log(shouldBuyThis(101,conservativeSpender))