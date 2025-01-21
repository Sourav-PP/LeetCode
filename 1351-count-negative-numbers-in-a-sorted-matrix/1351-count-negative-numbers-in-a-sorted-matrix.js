/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let arr =  grid.flat()
    let neg = arr.filter(item => item < 0)

    return neg.length
};