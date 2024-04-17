// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return nums.indexOf(nums[i]);
    }
  }
  nums.push(target);

  let sortedArray = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == target) {
      return sortedArray.indexOf(nums[i]);
    }
  }
};
