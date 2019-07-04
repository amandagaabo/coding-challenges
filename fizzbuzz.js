console.log('FIZZ BUZZ');
console.log('Write a program that prints the numbers from 1 to 100.');
console.log('If it’s a multiple of 3, it should print “Fizz”. If it’s a multiple of 5, it should print “Buzz”.')
console.log('If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.')
console.log('---------------------------------------------------------------------------------------------------------------------')

const fizzBuzz1 = () => {
	let returnString = '';
	for (var i = 1; i <= 100; i++) {
		const divisibleByThree = i%3 === 0;
		const divisibleByFive = i%5 === 0;

		if (divisibleByThree && divisibleByFive) returnString += 'Fizz Buzz ';
		else if (divisibleByThree) returnString += 'Fizz ';
		else if (divisibleByFive) returnString += 'Buzz ';
		else returnString += `${i} `;
	}
	console.log(returnString)
}

fizzBuzz1();

console.log('');
console.log('FIZZ BUZZ - WITH PARAMETERS')
console.log('Write a program that prints the numbers from min to max.');
console.log('If it’s a multiple of fizzNumber, it should print “Fizz”. If it’s a multiple of buzzNumber, it should print “Buzz”.')
console.log('If it’s a multiple of fizzNumber and buzzNumber, it should print “Fizz Buzz”.')
console.log('---------------------------------------------------------------------------------------------------------------------')

const fizzBuzz2 = (start, end, fizzNumber, buzzNumber) => {
	let returnString = '';
	for (var i = start; i <= end; i++) {
		const divisibleByFizzNumber = i%fizzNumber === 0;
		const divisibleByBuzzNumber = i%buzzNumber === 0;

		if (divisibleByFizzNumber && divisibleByBuzzNumber) returnString += 'Fizz Buzz ';
		else if (divisibleByFizzNumber) returnString += 'Fizz ';
		else if (divisibleByBuzzNumber) returnString += 'Buzz ';
		else returnString += `${i} `;
	}
	console.log(returnString)
}

fizzBuzz2(1, 100, 3, 5);
console.log('');
fizzBuzz2(100,200,4,10);
