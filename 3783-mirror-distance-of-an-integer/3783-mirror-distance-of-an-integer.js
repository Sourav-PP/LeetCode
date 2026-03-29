/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let reverse = 0
    let num = n

    while(n > 0) {
        let r = Math.floor(n / 10)
        reverse = (reverse * 10) + (n % 10)
        n = r
    }

    return Math.abs(reverse - num)
};
