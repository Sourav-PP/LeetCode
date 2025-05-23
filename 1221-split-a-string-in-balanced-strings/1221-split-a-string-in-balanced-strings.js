/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0
    let balance = 0

    for(let i of s) {
        if(i === "L") balance++
        else if(i === "R") balance--

        if(balance === 0) count ++
    }
    return count
};