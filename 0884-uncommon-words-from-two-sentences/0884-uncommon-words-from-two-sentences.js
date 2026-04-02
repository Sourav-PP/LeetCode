/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let map1 = new Map()
    let arr1 = s1.split(" ")
    let arr2 = s2.split(" ")
    let result = []
    
    for(let i of arr1) {
        map1.set(i, (map1.get(i) || 0) + 1)
    }

    for(let i of arr2) {
        map1.set(i, (map1.get(i) || 0) + 1)
    }

    for(let [key, value] of map1) {
        if(value === 1) {
            result.push(key)
        }
    }

    return result
};