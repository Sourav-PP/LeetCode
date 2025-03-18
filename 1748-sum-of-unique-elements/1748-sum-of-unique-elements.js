/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map()
    let sum = 0

    for(let i of nums) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    for(let i of nums) {
        if(map.get(i) === 1) {
            sum += i
        }
    }
    return sum
};