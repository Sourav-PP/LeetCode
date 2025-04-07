/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0
    nums.map((item,index) => {
        if(item === 0) {
            nums.splice(index,1)
            count ++
        }
    })

    while(count) {
        nums.push(0)
        count --
    }

    return nums
}