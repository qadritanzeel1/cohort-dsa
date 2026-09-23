//Arrays
//What is  Array

// Array is linnear Data Structure which stores multiple values in contnous memory allocation

//check if the number is strong or not 


//A strong number is a positive integer where the sum of the factorials of its individual digits equals the number itself. It is also known as a Krishnamurthy number or a factorion

let n = Number(prompt("Please enter a number"))   

let copy = n ;
let ans = 0;

while(n>0){
    let rem = n%10;
    fact = 1
    for(let i =1; i<=rem;i++){
        fact = fact * i
    }
    ans = ans + fact 
    n = Math.floor(n/10);
}
if(copy===ans) console.log("Strong Number")
else console.log("Not a strong number")    