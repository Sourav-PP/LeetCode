/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr = []
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] != -1 && nums[i] == nums[j]){
                arr.push(nums[i])
                nums[i] = -1 
                break
            }
            
        }
    }
    return arr
};