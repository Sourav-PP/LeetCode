/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = -Math.pow(2,31)
    let max = Math.pow(2,31) - 1
    
    let sign = x < 0 ? -1 : 1
    let arr = Math.abs(x).toString().split('')
    let left = 0
    let right = arr.length - 1
    while(left < right && arr[left] !== '-') {
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left ++
        right --
    }
    console.log(arr)
    let result = Number(arr.join('')) * sign

    if(result < min || result > max) return 0
    return result
    
};