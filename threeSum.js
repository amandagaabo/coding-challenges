console.log('THREE SUM');
console.log('Write a program that takes an array of numbers and returns an array of arrays with unique triplets that have sum 0.');
console.log('---------------------------------------------------------------------------------------------------------------------')

const isSumZero = arr => {
	return arr.reduce((total, num) => total + num) === 0;
}

const getCombinations = (arr, tempArr, start, end, index, sumZeroCombinations) => {
	if (index === 3) {
		if(isSumZero(tempArr)) {
			sumZeroCombinations.push([
				tempArr[0],
				tempArr[1],
				tempArr[2]
			])
		}
		return;
	}

	for (let i = start; i <= end && end - i + 1 >= 3 - index; i++) {
		tempArr[index] = arr[i];
		getCombinations(arr, tempArr, i + 1, end, index + 1, sumZeroCombinations);
	}

	return sumZeroCombinations;
}

const threeSum = nums => {
	const temp = [];
	let sumZeroCombinations = [];
	// sort so duplicates are not added
	nums = nums.sort((a, b) => a - b);
	const numsWithSumZero = getCombinations(nums, temp, 0, nums.length - 1, 0, sumZeroCombinations);
	return Array.from(new Set(numsWithSumZero.map(JSON.stringify)), JSON.parse);
}

console.log(threeSum([1,2,3,4,5]));
console.log(threeSum([1,-1,0,4,5,-5]));
console.log(threeSum([1,-1,0,1,-1,0,2]));

// https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/
