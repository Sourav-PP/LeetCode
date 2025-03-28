/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let divisors = []
    for(let i=1; i<=num/2; i++) {
        if(Number.isInteger(num / i)) {
            divisors.push(i)
        }
    }

    let sum = divisors.reduce((acc, curr) => acc + curr , 0)
    if(sum === num) {
        return true
    }else{
        return false
    }
};