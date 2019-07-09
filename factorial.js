console.log('FACTORIAL');
console.log('Write a program that takes a number as an input and prints the factorial of the number.');
console.log('---------------------------------------------------------------------------------------------------------------------')

const getFactorial = number => {
    // cannot have factorial of a negative number
    if (number < 0) return -1;
    if (number === 0 || number === 1) return 1;
    let returnValue = number;
    for (let i = number - 1; i > 0; i--) {
        returnValue = returnValue * i;
    }
    return returnValue;
}

console.log(getFactorial(0));
console.log(getFactorial(1));
console.log(getFactorial(8));

console.log('');
console.log('FACTORIAL - RECURSION');
console.log('---------------------------------------------------------------------------------------------------------------------')

const getFactorial2 = number => {
    if (number < 0) return -1;
    if (number === 0 || number === 1) return 1;
    else return number * getFactorial2(number - 1)
}

console.log(getFactorial2(0));
console.log(getFactorial2(1));
console.log(getFactorial2(8));
