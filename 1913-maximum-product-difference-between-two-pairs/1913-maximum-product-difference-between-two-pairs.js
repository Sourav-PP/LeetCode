/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let arr = []
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            for(let k=0; k<nums.length; k++) {
                for(let l=0; l<nums.length; l++) {
                    if(i != j && i != k && i != l && j != k && j != l && k != l) {
                        arr.push((nums[i]*nums[j]) - (nums[k]*nums[l]))
                    }
                }
            }
        }
    }
    let srt = arr.sort((a,b) => a-b)
    let smallest = srt[0]
    return Math.abs(smallest)
};