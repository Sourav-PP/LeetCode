/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = nums.sort((a,b) => b-a)
    let final = [...new Set(arr)]

    if(final.length >= 3) {
        return final[2]
    }else {
        return final[0]
    }
};