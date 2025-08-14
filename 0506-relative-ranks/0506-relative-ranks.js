/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let answer = new Array(score.length).fill(0)
    let sorted = [...score]
    sorted.sort((a, b) => b - a)
    let map = new Map()

    // 3(1), 4(4), 8(2), 9(3), 10(0) 
    for(let i=0; i<sorted.length; i++) {
        if(i === 0) {
            map.set(sorted[i], 'Gold Medal')
        }else if(i === 1) {
            map.set(sorted[i], 'Silver Medal')
        }else if(i === 2) {
            map.set(sorted[i], 'Bronze Medal')
        }else{
            map.set(sorted[i], i + 1)
        }
    }
    for(let [key, value] of map) {
        for(let i=0; i<score.length; i++) {
            if(score[i] === key) {
                answer[i] = value.toString()
                break
            }
        }
    }

    return answer
};