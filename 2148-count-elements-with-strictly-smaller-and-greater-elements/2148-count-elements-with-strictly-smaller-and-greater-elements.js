/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let numbers = []
    for(let i=0; i<nums.length; i++) {
        let smaller = false
        let larger = false
        for(let j=0; j<nums.length; j++) {
            if(j !== i && nums[i] < nums[j]) {
                larger = true
            }else if(j !== i && nums[i] > nums[j]) {
                smaller = true
            }
        }
        if(smaller && larger) {
            numbers.push(nums[i])
        }
    }

    return numbers.length
};