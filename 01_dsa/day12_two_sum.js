/*
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

Constraints:
You may assume that each input would have exactly one solution.
You may not use the same element twice.
You can return the answer in any order.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] (Because nums[0] + nums[1] == 9)
*/

const twoSum = (nums, target) => {
  const map = {}; 

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum; 

   
    if (complement in map) {
      return [map[complement], i]; 
    }
    map[currentNum] = i;
  }
  return null;
};  

console.log(twoSum([4,21, 8, 34, 6, 12, 51], 20));