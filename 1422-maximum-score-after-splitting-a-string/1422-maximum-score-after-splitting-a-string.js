/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0
    for(let ch of s) {
        if(ch === '1') totalOnes++
    }

    let leftZeros = 0, rightOnes = totalOnes
    let maxScore = 0
    for(let i=0; i<s.length; i++) {
        if(s[i] === '0'){
            leftZeros++
        }else{
            rightOnes --
        }

        maxScore = Math.max(maxScore, (leftZeros + rightOnes))
    }

    return maxScore
};