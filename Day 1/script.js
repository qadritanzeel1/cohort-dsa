// 1. Accept an integer and print Hello World n times

let n = Number(prompt("Please enter a number"));

for (let i = 1; i <= n; i++) {
    console.log("Hello World");
}


// 2. Print natural numbers up to n

n = Number(prompt("Please enter a number"));

for (let i = 1; i <= n; i++) {
    console.log(i);
}


// 3. Reverse for loop - print n to 1

n = Number(prompt("Please enter a number"));

for (let i = n; i >= 1; i--) {
    console.log(i);
}


// 4. Take a number as input and print its table

n = Number(prompt("Please enter a number"));

for (let i = 1; i <= 10; i++) {
    console.log(n * i);
}


// 5. Sum up to n terms

n = Number(prompt("Please enter a number"));

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log(sum);


// 6. Factorial of a number

n = Number(prompt("Please enter a number"));

let fact = 1;

for (let i = 1; i <= n; i++) {
    fact = fact * i;
}

console.log(fact);


// 7. Print the sum of all even and odd numbers separately

n = Number(prompt("Please enter a number"));

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;
    }
}

console.log(evenSum);
console.log(oddSum);


// 8. Print all the factors of a number

n = Number(prompt("Please enter a number"));

for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
        console.log(i);
    }
}

console.log(n);


// 9. Check if the number is prime or not

n = Number(prompt("Please enter a number"));

let isPrime = true;

for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime === true) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}