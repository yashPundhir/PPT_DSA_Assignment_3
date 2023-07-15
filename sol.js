// Assignment 3 Questions - Arrays | DSA

/*

Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

// Solution

function threeSumClosest(nums, target) {
	nums.sort((a, b) => a - b);
	const n = nums.length;
	let closestSum = Infinity;

	for (let i = 0; i < n - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		let left = i + 1;
		let right = n - 1;

		while (left < right) {
			const currentSum = nums[i] + nums[left] + nums[right];

			if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
				closestSum = currentSum;
			}

			if (currentSum < target) {
				left++;
			} else if (currentSum > target) {
				right--;
			} else {
				return target;
			}
		}
	}

	return closestSum;
}

const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result);

/*

Question 2
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

*/

// Solution

function fourSum(nums, target) {
	const n = nums.length;
	const result = [];

	nums.sort((a, b) => a - b); // Step 1: Sort the array

	for (let i = 0; i < n - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		for (let j = i + 1; j < n - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue;
			}

			let left = j + 1;
			let right = n - 1;

			while (left < right) {
				const sum = nums[i] + nums[j] + nums[left] + nums[right];

				if (sum === target) {
					result.push([nums[i], nums[j], nums[left], nums[right]]);
					left++;
					right--;

					while (left < right && nums[left] === nums[left - 1]) {
						left++;
					}

					while (left < right && nums[right] === nums[right + 1]) {
						right--;
					}
				} else if (sum < target) {
					left++;
				} else {
					right--;
				}
			}
		}
	}

	return result;
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

/*

**Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]

*/

// Solution

function nextPermutation(nums) {
	const n = nums.length;
	let i = n - 2;

	// Step 1: Find the first pair `nums[i]` and `nums[i-1]` such that `nums[i] > nums[i-1]`
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--;
	}

	if (i >= 0) {
		let j = n - 1;
		// Step 2: Find the smallest element `nums[j]` such that `nums[j] > nums[i-1]`
		while (j >= 0 && nums[j] <= nums[i]) {
			j--;
		}
		// Step 3: Swap `nums[i-1]` with `nums[j]`
		swap(nums, i, j);
	}

	// Step 4: Reverse the subarray starting from index `i` onwards
	reverse(nums, i + 1);

	return nums;
}

function swap(nums, i, j) {
	const temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

function reverse(nums, start) {
	let i = start;
	let j = nums.length - 1;
	while (i < j) {
		swap(nums, i, j);
		i++;
		j--;
	}
}

const nums = [1, 2, 3];
console.log(nextPermutation(nums)); // Output: [1, 3, 2]

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

/*

Question 8

Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

*/

// Solution 8

function checkMeetings(intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	const n = intervals.length;
	for (let i = 0; i < n - 1; i++) {
		if (intervals[i][1] > intervals[i + 1][0]) {
			return false;
		}
	}
	return true;
}
