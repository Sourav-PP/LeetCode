/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elemSum = nums.reduce((a, c) => a + c, 0)
    const arr = nums.map(a => a.toString())
    const digitSum = arr.join('').split('').reduce((a,c) => a + Number(c), 0)

    return (elemSum - digitSum)
};