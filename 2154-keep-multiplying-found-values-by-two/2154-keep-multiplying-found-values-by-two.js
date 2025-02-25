/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let numSet = new Set(nums)

    while(numSet.has(original)) {
        original = original * 2
    }

    return original
};