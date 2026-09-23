// While loop in js 


// declare or initialize 

// while(//condition){
// change    

// }

// let n = 5;

// let i = 1;

// while(i<=n){
//     console.log("Hello World");
//     i++;
// }




// let n = 9000000
// let i=1
// sum =0

// while(i<=n){
//     sum=sum+i
//     i++
// }

// console.log(sum)



//sum of digits

// let n = Number(prompt("Please enter a number"));

// sum = 0

// while(n>0){
//     rem = n%10;
//     sum = sum +rem
//     n = Math.floor(n/10);
// }

// console.log(sum)

// Reverse of a number

// let n = Number(prompt("Please enter a number"));

// rev = 0

// while(n>0){
//     rem = n%10
//     rev = (rev*10)+rem
//     n = Math.floor(n/10)
// }

// console.log(rev)


//check if the number is automorphic or not

// let n = Number(prompt("Please enter a number"));

// let copy = n
// let sq = n*n
// let count = 0

// while(n>0){
//     count++

//     n=Math.floor(n/10)

// }

// if(sq%Math.pow(10,count)==copy){
//     console.log("Automorphic")
// }else{
//     console.log("Not Automorphic")
// }


//switch case

n = Number(prompt("Please enter a number"))

switch(n){
    case 1 : console.log("Monday")
    break
    case 2 : console.log("Tuesday")
    break
    case 3 : console.log("Wednesday")
    break
    case 4 : console.log("Thursday")
    break

    default: console.log("No case matched")
}