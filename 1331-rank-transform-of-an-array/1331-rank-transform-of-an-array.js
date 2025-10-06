/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...arr]
    sorted.sort((a,b) => a - b)
    let map = new Map();
    const result = []
    let rank = 1
    
    for(let i of sorted) {
        if(map.get(i)) {
            map.set(i, map.get(i))
        } else {
            map.set(i, rank)
            rank ++
        }
    }

    for(let i of arr) {
        result.push(map.get(i))
    }

    return result
};