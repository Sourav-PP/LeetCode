/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let arr = new Array()
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == i%10) {
            arr.push(i)
        }
    }
    if(arr.length == 0) {
        return -1
    }else{
        return Math.min(...arr)
    }
};