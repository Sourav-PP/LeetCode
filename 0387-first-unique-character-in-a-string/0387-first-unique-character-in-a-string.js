/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let counts = {}
    let uniques = []

    for(let char of s) {
        counts[char] = (counts[char] || 0) + 1
    }

    for(let char in counts) {
        if(counts[char] === 1) {
            uniques.push(char)
        }
    }

    return s.split('').indexOf(uniques[0])
};