/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const arr = nums.map(item => {
        return item.toString().split('').map(Number).reduce((acc,cur) => acc + cur ,0)
    })

    const min = Math.min(...arr)
    return min
};