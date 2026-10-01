let prompt = require("prompt-sync")()
//strings in js 

// let str  = "hello world"
// console.log(str.length) //returns length of a string 

//check if the string is palindrome or not 

let str = prompt("Please enter name ")

let isPalindrome = true
let i=0;j=str.length-1

while(i<j){
    if(str[i]!==str[j]){
        isPalindrome=false
        break;
    }
    i++
    j--
}

if(isPalindrome) console.log("given name is a plindrome")
    else console.log("given name is not a palindrome")