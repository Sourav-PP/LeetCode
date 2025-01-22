/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    const arr = num.split('').map(Number)
    let sumEven = 0
    let sumOdd = 0

    for(let i=0; i<arr.length; i++) {
        if(i%2 == 0) {
            sumEven += arr[i]
        }else{
            sumOdd += arr[i]
        }
    }

    if(sumEven === sumOdd) {
        return true
    }else {
        return false
    }
};