/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let map = new Map()
    for(let i of nums) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    for(let i of nums) {
        if(map.get(i) % 2 !== 0) {
            return false
        }
    }
    return true
};