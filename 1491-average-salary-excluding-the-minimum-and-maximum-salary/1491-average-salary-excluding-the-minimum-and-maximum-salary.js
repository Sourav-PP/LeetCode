/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary)
    let arr = salary.filter(item => item != min && item != max)
    let sum = arr.reduce((acc,curr) => {
        return acc += curr
    },0)
    let avg = sum / arr.length
    return avg
};