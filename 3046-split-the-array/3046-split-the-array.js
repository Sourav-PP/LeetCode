/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let nums1 = nums.slice(0, nums.length/2)
    let nums2 = nums.slice(nums.length/2)
    let map = new Map()
    for(let i of nums) {
        map.set(i, (map.get(i) || 0 ) + 1)
    }

    for(let [key,val] of map) {
        if(val > 2) return false
    }

    if(nums1.length === nums.length / 2 &&  nums2.length === nums.length / 2) {
        return true
    }
    return false
};