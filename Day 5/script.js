let prompt = require("prompt-sync")()


// questions on arrays

// let size = Number(prompt("Please enter size of array"))
// let arr = new Array(size);

// for(let i = 0;i<=arr.length-1;i++){
//   arr[i]=Number(prompt("Please enter elements"))
// }

// console.log(arr);


//q2=> sum of arrays element


// let arr = [20,9,19,28,1];
// let sum = 0

// for(let i =0;i<=arr.length-1;i++){
//   sum=sum+arr[i]
// }
// console.log(sum)

//maximum element from the array

// let arr = [10,30,40,99,80]

// let max = arr[0]

// for(let i =0;i<=arr.length-1;i++){
//   if(arr[i]>max) max = arr[i]
// }

// console.log(max)

//minimum element from the array 

// let arr = [10,19,18,17,16,9,-1,-2]

// let min = arr[0]

// for(let i =0;i<=arr.length-1;i++){
//   if(arr[i]<min){
//     min = arr[i]
//   }
// }

// console.log(min);


// Find the second largest element

// let arr = [28,6,75,48,84,84];
// // console.log(arr.length)
// let max =  Math.max(arr[0],arr[1]);
// let sMax= Math.min(arr[0],arr[1]);

// for(let i = 2;i<=arr.length-1;i++){
//    if(arr[i]>max){
//       sMax = max;
//       max = arr[i]
//    }else if(arr[i]>sMax && max!==arr[i]){
//       sMax=arr[i]
//    }
// }

// console.log(sMax)


// Reverse the array with extra space 

// let arr=   [ 1,2,3,4,5,6];
// let temp  = new Array(arr.length);
// let j =0
// for(let i = arr.length-1;i>=0;i--){
//     temp[j]=arr[i]
//     j++
// }
// console.log(temp)


//


// reverse an array without extra space

// let arr = [1,2,3,4,5,6,7];

// let i =0; j = arr.length-1

// while(j>i){
//    let temp = arr[i];
//    arr[i]=arr[j];
//    arr[j] =  temp
//    i++
//    j--
// }

// console.log(arr);

//Move all zeros to left and all ones to right

// let arr  = [1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]

// let j = 0;

// for(let i = 0; i<=arr.length-1;i++){
//    if(arr[i]===0){
//       let temp = arr[i];
//       arr[i]= arr[j];
//       arr[j]= temp;
//       j++
//    }
// }

// console.log(arr);

//array lefft rotation by 1

// let arr  = [1,2,3,4,5];
// temp = arr[0];
// for(let i = 0;i<=arr.length-1;i++){
//    arr[i]= arr[i+1]
// }
// arr[arr.length-1] = temp
// console.log(arr)



// move all elements by k steps
//Approach 1
// let arr = [1,2,3,4,5];
// let k = Number(prompt("Please enter steps to move"));
// k = k%arr.length

// for(let j=1;j<=k;j++){

//    let copy = arr[0];
//    for(let i=0;i<=arr.length-1;i++){
//       arr[i]= arr[i+1]
//    }

//    arr[arr.length-1] = copy

// }
// console.log(arr)


// approach 2


// let arr = [1,2,3,4,5]
// let temp = new Array(4)
// let k = Number(prompt("Please enter k elements"))

// for(let i =0 ; i<arr.length;i++){
//    temp[i] = arr[(i+k)%arr.length]
// }

// console.log(temp)

//approach 3

// let arr = [1,2,3,4,5];
// let k = Number(prompt("Please enter steps to move  left"));
// k =k%arr.length;
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1)
// reverse(arr,0,arr.length-1);
// console.log(arr)

// function reverse(arr,i,j){
//    while(i<j){
//       let temp = arr[i];
//       arr[i]= arr[j];
//       arr[j] = temp
//       i++
//       j--
//    }
// }



// find the target and print its index by linear search 

// let arr = [9,45,67,43,21];
// let target = Number(prompt("Please enter a number"))
// let idx = -1;

// for(let i =0 ;i<=arr.length-1;i++){
//    if(arr[i]===target){
//       idx = i
//    }
// }

// if(idx === -1) console.log("element not found")
//    else console.log(`element found at index ${idx}`)


//binary search 

let arr = [12, 14, 17, 19, 20, 21, 25, 28];
let target = 25;
let j = arr.length - 1

F = 0
L = arr.length - 1

while (F <= L) {
   let mid = Math.floor((L + F / 2))
   if (arr[mid] === target) {
      console.log(mid)
      break;
   } else if (arr[mid] > target) {
      L = mid - 1
   } else if (arr[mid] < target) { F = mid + 1 }


}


