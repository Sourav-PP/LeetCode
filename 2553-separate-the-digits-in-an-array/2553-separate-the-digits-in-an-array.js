/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let answer = new Array()
    nums.forEach(item => {
        answer.push(item.toString().split('').map(Number))
    })
    return answer.flat()
};