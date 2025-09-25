/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    let result = []
    for(let i of strs) {
        let key = i.split('').sort().join('')
        if(!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(i)
    }
    
    for(let [key,val] of map) {
        result.push(val)
    }
    return result
};