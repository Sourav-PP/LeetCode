/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0
    
    //initial window sum
    for(let i=0; i<k; i++) {
        windowSum += nums[i]
    }

    let maxSum = windowSum

    //slide the window
    for(let i=k; i<nums.length; i++) {
        windowSum += nums[i] - nums[i-k]
        maxSum = Math.max(windowSum, maxSum)
    }

    return maxSum / k
};