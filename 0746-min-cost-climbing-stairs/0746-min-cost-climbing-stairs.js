/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let second = cost[0]
    let first = cost[1]
    
    for(let i=2; i<cost.length; i++) {
        let curr = cost[i] + Math.min(first, second)
        second = first
        first = curr
    }
    
    return Math.min(first,second)
};