/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let result = []
    for(let i=0; i<s.length; i++) {
        if(/[0-9]/.test(s[i])) {
            result.push(Number(s[i]))
        }
    }
    let arr = result.filter(item => item !== Math.max(...result))

    if(arr.length) {
        return Math.max(...arr)
    }else{
        return -1
    }
};