/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l = nums.length
    let arr = []
    if(l == 1) {
        return 0
    }
    for(let i=1; i<=l; i++) {
        if(!nums.includes(i)){
            arr.push(i)
        }
    }
    return arr[0]
};