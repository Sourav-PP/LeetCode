/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  
    nums.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
    return nums[0]

};