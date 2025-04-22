/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let result = []

   for(let i=0; i<nums.length; i++) {
        let left = new Set(nums.slice(0, i+1))
        let right = new Set(nums.slice(i+1))
        console.log(left)
        result.push(left.size - right.size)
    }

    return result
};