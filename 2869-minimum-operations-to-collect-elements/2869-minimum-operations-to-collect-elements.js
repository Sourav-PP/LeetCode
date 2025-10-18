/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0
    let needed = new Set()
    for(let i=1; i<=k; i++) {
        needed.add(i)
    }
    console.log(needed)
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] <= k) {
            needed.delete(nums[i])
            count ++
        } else if(needed.size === 0) {
            break;
        } else {
            count ++
        }
        
        if(needed.size === 0) {
            return count
        }
    }
    return count
};