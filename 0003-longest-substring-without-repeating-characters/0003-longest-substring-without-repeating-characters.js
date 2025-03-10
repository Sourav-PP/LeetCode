/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Set()
    let max = 0
    let left = 0

    for(let i=0; i<s.length; i++) {
        while(seen.has(s[i])) {
            seen.delete(s[left])
            left++
        }
        seen.add(s[i])
        max = Math.max(max, i - left + 1)
    }
    return max
};