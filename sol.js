// Assignment 3 Questions - Arrays | DSA

/*

Question 4

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

*/

// Solution 4

function find(array, target) {
	let left = 0;
	let right = array.length - 1;
	let mid = 0;
	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		if (target === array[mid]) {
			return `target found at index ${mid}`;
		} else if (target > array[mid]) {
			left = mid + 1;
		} else if (target < array[mid]) {
			right = mid - 1;
		}
	}
	return `target is not found and thus target should be inserted at index ${left}`;
}

console.log(find([-5, -2, 0, 3, 5, 7, 9], -1));

/*

**Question 5**

You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

*/

// Solution 5

function increment(digits) {
	if (digits[digits.length - 1] < 9) {
		digits[digits.length - 1] = digits[digits.length - 1] + 1;
		return digits;
	}
	let str = "";
	for (const digit of digits) {
		str = str + String(digit);
	}
	let num = Number(str);
	num = num + 1;
	str = String(num);
	for (let index = 0; index < str.length; index++) {
		digits[index] = Number(str[index]);
	}
	return digits;
}
console.log(increment([4, 6, 7]));

/*

Question 6

Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

*/

// Solution 6

function find(nums) {
	let uniqueNum = 0;
	for (const num of nums) {
		uniqueNum = uniqueNum ^ num;
	}
	return uniqueNum;
}

/*

Question 7

You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]

*/

// Solution 7

function listOfRanges(lower, upper, nums) {
	let lowerRange = 0;
	let upperRange = 0;
	let range = [];
	const n = nums.length;
	for (let i = 0; i < n; i++) {
		if (i === 0 && nums[i] - lower !== 0) {
			lowerRange = lower;
			upperRange = nums[i] - 1;
			range.push([lowerRange, upperRange]);
		}
		if (i === n - 1 && upper - nums[i] !== 0) {
			lowerRange = nums[i] + 1;
			upperRange = upper;
			range.push([lowerRange, upperRange]);
		}
		if (1 <= i && i < n - 1 && nums[i + 1] - nums[i] !== 0) {
			lowerRange = nums[i] + 1;
			upperRange = nums[i + 1] - 1;
			range.push([lowerRange, upperRange]);
		}
	}
	return range;
}
