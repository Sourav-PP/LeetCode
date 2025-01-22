/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = nums.map(item => item * item)
    let final = result.sort((a,b)=> a-b)
    return final
};