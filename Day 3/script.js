//Nested Programming and pattern printing
var prompt = require('prompt-sync')()
// for(let i = 1;i<=5;i++){
//     process.stdout.write("* ")
// }
// console.log()
// for(let i = 1;i<=5;i++){
//     process.stdout.write("* ")
// }
// console.log()
// for(let i = 1;i<=5;i++){
//     process.stdout.write("* ")
// }
// console.log()
// for(let i = 1;i<=5;i++){
//     process.stdout.write("* ")
// }
// console.log()
// for(let i = 1;i<=5;i++){
//     process.stdout.write("* ")
// }
// console.log()
// for(let i = 1;i<=5;i++){
//     process.stdout.write("* ")
// }



//but the above solution is not a good solution
// for that we use nested looping 

// for(let i =1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// let n = Number(prompt("Please enter a number"))

// console.log(n)

//now we will make above code dynamic 

// let n = Number(prompt("Please enter a number"))

// for(let i = 1; i<=n;i++){
//     for(j=1;j<=n;j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//Right angled triangle


// let n = Number(prompt("Please enter a number"))

// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// let n = Number(prompt("Please enter a number"))

// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write( j + " "  )
//     }
//     console.log()
// }


// for(let i =1;i<=5;i++){
//     for(j=5;j>=i;j--){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// let n = Number(prompt("Please enter a number")) //69

// for(i=65;i<=n;i++){
//     for(j=65;j<=i;j++){
//         process.stdout.write( String.fromCharCode(j) + " " )
//     }
//     console.log()
// }




// for(let i =1;i<=5;i++){
//     for(j=5;j>i;j--){
//         process.stdout.write(" " )
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*"); 
//     }
//     console.log()
// }

//    *
//   **
//  ***
// ****
//***** 


// for(let i =1;i<=5;i++){
//     for(j=5;j>i;j--){
//         process.stdout.write(" " )
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" *"); 
//     }
//     console.log()
// }

//x pattern
// let n = Number(prompt("Please enter a number"))
// for(let i= 1;i<=n;i++){
//     for(let j = 1;j<=n;j++){
//         if((i===j)||(i+j===n+1)){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }



//V pattern
// let n = Number(prompt("Please enter a number"))
// for(let i= 1;i<=n;i++){
//     for(let j = 1;j<=(n*2)-1;j++){
//         if((i===j)||(i+j===n*2)){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }