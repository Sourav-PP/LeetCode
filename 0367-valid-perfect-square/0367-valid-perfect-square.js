/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let number = Math.sqrt(num)

    return Number.isInteger(number)
};