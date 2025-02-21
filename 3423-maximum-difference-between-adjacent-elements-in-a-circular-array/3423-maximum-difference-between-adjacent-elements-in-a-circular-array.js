/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let arr = new Array()
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] > nums[i+1]) {
            arr.push(nums[i] - nums[i+1])
        } else {
            arr.push(nums[i+1] - nums[i])
        }
    }
    if(nums[0] > nums[nums.length - 1]) {
        arr.push(nums[0] - nums[nums.length - 1])
    }else {
        arr.push(nums[nums.length - 1] - nums[0])
    }

    return Math.max(...arr)
};