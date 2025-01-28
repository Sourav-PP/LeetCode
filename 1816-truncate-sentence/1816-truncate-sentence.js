/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let word = s.split(' ')
    let arr = []
    for(let i=0; i<k; i++) {
        arr.push(word[i])
    }
    return arr.join(' ')
};