/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let l = nums.length
    let specials = nums.filter((item,index) => {
        if(l % (index + 1) == 0) {
            return item
        }
    })

    let sum = specials.reduce((acc,cur) => acc + (cur * cur) , 0)
    return sum
};