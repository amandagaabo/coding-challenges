console.log('FIBONACCI');
console.log('Create a function that takes a number n and returns the nth number in the Fibonacci sequence.');
console.log('---------------------------------------------------------------------------------------------')


// The Fibonacci sequence is a series of numbers, where each number is the sum of the two numbers preceding it.
// Ex: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// the 4th number is 3.

const getFibonacci = number => {
    const fibonacciSequence = [0, 1];
    if (number < 2) return fibonacciSequence[number];

    for (let i = 2; i <= number; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
    };

    return fibonacciSequence[number];
}

console.log(getFibonacci(4));
console.log(getFibonacci(10));
console.log('O(n)');


console.log('');
console.log('FIBONACCI - RECURSION');
console.log('-------------------------------------------------------------------------------------------')

let counter = 0;
const getFibonacci2 = number => {
    counter++;
    if (number < 2) return number;
    return getFibonacci2(number - 2) + getFibonacci2(number - 1);
}

console.log(getFibonacci2(4));
console.log(getFibonacci2(10));
console.log('O(2 ^ n)');
