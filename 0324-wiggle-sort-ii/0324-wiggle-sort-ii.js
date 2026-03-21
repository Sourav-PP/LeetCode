/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let sorted = nums.sort((a, b) => a - b)
    let l = nums.length
    let left = []
    let right = []
    for(let i=0; i<sorted.length; i++) {
        if(i < sorted.length / 2) {
            left.push(sorted[i])
        } else {
            right.push(sorted[i])
        }
    }
    let i = 0
    let j = 1
    while(left.length || right.length) {
        nums[i] = left.pop()
        nums[j] = right.pop()
        i += 2
        j += 2
    }
    nums.length = l
};