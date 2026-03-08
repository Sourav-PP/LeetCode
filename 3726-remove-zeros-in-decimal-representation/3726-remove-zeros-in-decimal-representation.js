/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let result = n.toString().split('').filter(i => i > 0).join('')
    return Number(result)
};