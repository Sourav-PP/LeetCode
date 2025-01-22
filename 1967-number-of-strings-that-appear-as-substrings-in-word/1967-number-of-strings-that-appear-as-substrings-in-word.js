/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    const arr = patterns.filter(item => word.includes(item))
    return arr.length
};