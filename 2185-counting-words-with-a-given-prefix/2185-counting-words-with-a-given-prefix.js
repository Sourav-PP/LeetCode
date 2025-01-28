/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let l = pref.length
    let arr = words.filter(item => item.slice(0,l) == pref)
    return arr.length
};