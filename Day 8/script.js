let prompt = require("prompt-sync")()

//printing multo dimentional array

// let arr = [[1,2,3],[4,5,6],[7,8,9]];

// for(let i =0;i<arr.length;i++){
//     for(let j =0;j<arr[i].length;j++){
//         process.stdout.write(" "+ arr[i][j])
    
//     }
//     console.log()
// }



//diagonal sum 

let arr = [
    [1,2,3],
    [4,1,6],
    [7,8,1]
]

leftSum = 0
rightSum = 0
for(let i =0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(i==j)  leftSum = leftSum + arr[i][j]
        if(i+j==arr.length-1) rightSum = rightSum + arr[i][j]
    }
    console.log()
}

console.log(leftSum)
console.log(rightSum)
