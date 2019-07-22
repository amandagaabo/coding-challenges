console.log('PALINDROMES');
console.log('Write a program that takes a string and returns the longest palindromic substring within the string.');
console.log('---------------------------------------------------------------------------------------------------------------------')

const isPalindrome = s => {
	s = s.toLowerCase();
	return s === s.split('').reverse().join('');
}

const getPalindrome = s => {
	if (isPalindrome(s)) return s;

	const length = s.length;
	let longestPal = '';

	for (let i = 0; i < length; i++) {
		for (let j = length; j > 0; j--) {
			let substring = s.substring(i,j);
			if (substring.length > 1 && substring.length > longestPal.length) {
				const substringIsPalindrome = isPalindrome(substring)
				longestPal = substringIsPalindrome ? substring : longestPal;
			};
		}
	}

	return longestPal
}

console.log(getPalindrome('haNnah'));
console.log(getPalindrome('asdsjk'));
console.log(getPalindrome('abacab'))
console.log(getPalindrome('babaddtattarrattatddetartrateedredividerb'))
