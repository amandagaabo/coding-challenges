console.log('SUMMATION');
console.log('Write a program that prints the sum of numbers in an array.');
console.log('---------------------------------------------------------------------------------------------------------------------')

const getSum = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(getSum([1, 2, 3]));
console.log(getSum([10, -20, 5]));