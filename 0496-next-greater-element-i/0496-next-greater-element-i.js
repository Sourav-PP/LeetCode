/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
     let arr = []
    for(let i=0; i<nums1.length; i++) {
        let flag = 1
        let index = nums2.indexOf(nums1[i])
        for(let j=index+1; j<nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                arr.push(nums2[j])
                flag = 0
                break;
            }
        }
        if(flag === 1) {
            arr.push(-1)
        }
    }
    arr.splice(nums1.length)
    return arr
};