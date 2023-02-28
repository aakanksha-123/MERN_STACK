//## Question Two
//
// Write a function that takes in a callback and a boolean.
//If the boolean is true, call the callback, otherwise
//log "Ignoring the callback" to the console.
//
// ```
// Input:
// () => console.log("")
//
// ```
function ignoreCallback(ignore,callback){
    if(ignore){
        console.log("ignore callback")
    }else{
        callback()
    }
}
function sayhello(){
    console.log("callback function get called")
}
ignoreCallback(false,sayhello)

  