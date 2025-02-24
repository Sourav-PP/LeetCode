/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set2 = new Set(nums2)

    let result = nums1.filter(item => set2.has(item))
    return [...new Set(result)]
};