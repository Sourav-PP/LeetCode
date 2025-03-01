/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let map = new Map()

    for(let i=0; i<arr.length; i++) {
        let match = target - arr[i]
        if(map.has(match)) {
            return [map.get(match), i]
        }else{
            map.set(arr[i], i)
        }
    }
};