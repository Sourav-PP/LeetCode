/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length) {
        console.log('hi')
        stones.sort((a,b) => a - b)
        // console.log(stones)
        if (stones.length === 1) {
            return stones[0]
        } else if (stones[stones.length - 1] === stones[stones.length - 2]) {
            console.log('stones: ', stones)
            stones.length-=2
        } else {
            console.log('stoness: ',stones)
            let elem = stones[stones.length - 1] - stones[stones.length - 2]
            stones.length -= 1
            stones[stones.length - 1] = elem
        }
    }
    
    return stones.length === 0 ? 0 : stones[0]
};