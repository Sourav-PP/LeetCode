/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let large = Math.max(...nums)
    let small = Math.min(...nums)
    
    while(small != 0) {
        let temp = small
        small = large % small
        large = temp
    }
    return large
};