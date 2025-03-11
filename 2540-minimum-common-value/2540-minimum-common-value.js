/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let seen = new Set(nums1)
    let common = []
    for(let num of nums2) {
        if(seen.has(num)) {
            common.push(num)
            seen.delete(num)
        }
    }
    return Math.min(...common)
};