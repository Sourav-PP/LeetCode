/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let set = new Set(nums)
    let max = -1

    for(let num of nums) {
        if(num > 0 && set.has(-num)) {
            max = Math.max(num, max)
        }
    }
    return max
};