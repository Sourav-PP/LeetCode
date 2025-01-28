/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = []
  let arr = new Set(nums)

  for(let i=1; i<=nums.length; i++) {
    if(!arr.has(i)){
        result.push(i)
    }
  } 
  return result  
};