/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let currentSum = 0

    for(let i=0; i<nums.length; i++) {
        currentSum += nums[i]
        if(currentSum > maxSum) {
            maxSum = currentSum
        }
        if(currentSum < 0) {
            currentSum = 0
        }
    }

    return maxSum
};