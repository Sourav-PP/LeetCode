/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let distOne = []
    let distTwo = []
    for(let i=0; i<nums1.length; i++) {
        isDist = true;
        for(let j=0; j<nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                isDist = false
            }
        }
        if(isDist) {
            distOne.push(nums1[i])
        }
    }
    for(let i=0; i<nums2.length; i++) {
        isDist = true;
        for(let j=0; j<nums1.length; j++) {
            if(nums2[i] === nums1[j]) {
                isDist = false
            }
        }
        if(isDist) {
            distTwo.push(nums2[i])
        }
    }

    return [[...new Set(distOne)], [...new Set(distTwo)]]
};
