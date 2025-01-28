/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let odd = []
    let even = []
    for(let i=0; i<nums.length; i++) {
        if(nums[i]%2 == 0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }

    let evenIndex = 0
    let oddIndex = 0
    for(let i=0; i<nums.length; i++){
        if(i%2 == 0) {
            nums[i] = even[evenIndex]
            evenIndex ++
        }else{
            nums[i] = odd[oddIndex]
            oddIndex ++
        }
    }

    return nums

};