/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let op of operations) {
        x += (op[1] === '+') ? 1 : -1 
    }
    return x
};