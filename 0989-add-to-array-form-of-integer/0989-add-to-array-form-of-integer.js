/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let number = ''
    num.forEach(n => number = number + n)
    let result = BigInt(number) + BigInt(k)
    
    return result.toString().split('').map(Number)
};