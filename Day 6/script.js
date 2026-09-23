let prompt  = require("prompt-sync")()
// Arrays revision 

// array left rotation by 1

// let arr = [1,2,3,4,5,6]
// let copy = arr[0]

// for(let i = 0; i<arr.length;i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1] = copy

// console.log(arr)

// array left rotation by k elements 

// let arr  = [1,2,3,4,5]
// let k = Number(prompt("please enter steps to move left"));

// for(let j =1;j<=k;j++){
//     let copy = arr[0];
//     for(let i =0;i<arr.length;i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = copy
// }

// console.log(arr)

//array right rotation by 1

let arr = [1,2,3,4,5]

let copy = arr[arr.length-1]

for(let i =arr.length-1;i>0;i--){
    arr[i] = arr[i-1]
}
arr[0]=copy
console.log(arr)