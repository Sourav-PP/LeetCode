/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let sMap = new Map()
    let tMap = new Map()

    for(let i=0; i<s.length; i++) {
        sMap.set(s[i], i)
    }

    for(let i=0; i<s.length; i++) {
        tMap.set(t[i], i)
    }

    let sum = 0
    for(let [key,val] of sMap) {
        sum += Math.abs(val - tMap.get(key))
    }

    return sum
};