/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()
    for(let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    let length = 0
    let oddFound = false

    for(let [ch,count] of map) {
        if(count % 2 === 0) {
            length += count
        } else {
            length += count - 1
            oddFound = true
        }
    }

    if(oddFound) {
        length += 1
    }

    return length
};