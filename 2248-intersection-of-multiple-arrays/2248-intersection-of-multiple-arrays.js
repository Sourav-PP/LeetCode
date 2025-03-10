/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let map = new Map()
    let totalArray = nums.length
    let result = []

    for(let arr of nums) {
        let seen = new Set()
        for(let item of arr) {
            if(!seen.has(item)) {
                seen.add(item)
                map.set(item, (map.get(item) || 0) + 1)
            }
        }
    }


    for(let [key,value] of map) {
        if(value === totalArray) {
            result.push(key)
        }
    }

    return result
};