/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0; i<nums.length; i++) {
        if(nums[i] < 10 && nums[i] === i) {
            return i
        } else {
            if(nums[i].toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0) === i) {
                return i
            }
        }
    }
    return -1
};