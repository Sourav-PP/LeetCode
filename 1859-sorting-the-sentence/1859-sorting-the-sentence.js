/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(' ')
    let sorted = arr.sort((a,b) => a[a.length - 1] - b[b.length - 1])
    let result = sorted.map(item => item.slice(0, -1)).join(' ')
    return result
};