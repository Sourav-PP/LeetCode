/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let evens = nums.filter(num => (num % 3 === 0 && num % 2 === 0))
    let sum = evens.reduce((a, c) => a + c, 0)
    if(!evens.length) return 0
    return Math.floor(sum / evens.length)
};