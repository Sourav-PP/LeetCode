/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let arr = []
    while(nums.length != 0) {
        let max = Math.max(...nums)
        let min = Math.min(...nums)
        let avg = (max + min) / 2
        arr.push(avg)

        let indexMax = nums.indexOf(max)
        let indexMin = nums.indexOf(min)
        nums.splice(indexMax,1)
        nums.splice(indexMin,1)

    }

    let dist = [...new Set(arr)]
    return dist.length
};