/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const sum = x.toString().split('').map(Number).reduce((acc,cur) => acc+cur,0)
    if(x%sum === 0){
        return sum
    }else{
        return -1
    }
};