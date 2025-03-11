/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr = n.toString().split('')
    let result = 0

    for(let i=0; i<arr.length; i++) {
        if(i%2 !== 0){
            result += -Number(arr[i])
        }else{
            result += Number(arr[i])
        }
    }
    return result
};