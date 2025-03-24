/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let maxOne = 0
    let maxZero = 0
    let currentOne = 0
    let currentZero = 0

    for(let i=0; i<s.length; i++) {
        if(s[i] === '1') {
            currentOne ++
            maxOne = Math.max(maxOne, currentOne)
            currentZero = 0
        }else{
            currentZero ++
            maxZero = Math.max(maxZero, currentZero)
            currentOne = 0
        }
    }

    if(maxOne > maxZero) {
        return true
    }else{
        return false
    }
};