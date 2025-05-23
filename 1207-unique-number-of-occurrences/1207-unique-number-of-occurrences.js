/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let countMap = new Map()

    arr.forEach(item => {
        countMap.set(item,(countMap.get(item) || 0) + 1)
    })
    const array = countMap.values()
    if([...new Set(array)].length > 1){
        return true
    }else{
        return false
    }
};