/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let b = [...new Set(s)]
    return b.length
};