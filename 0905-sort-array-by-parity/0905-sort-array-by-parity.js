/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const even = nums.filter(item => item%2 == 0)
    const odd = nums.filter(item => item%2 != 0)
    const result = even.concat(odd)

    return result
};