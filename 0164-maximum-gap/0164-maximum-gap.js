/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0
    let max = 0
    for(let i=0; i<nums.length; i++) {
        if(Math.abs(nums[i+1] - nums[i]) > max) {
            max = Math.abs(nums[i+1] - nums[i])
        }
    }

    return max
};