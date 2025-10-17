/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = {}

    let needed = { b: 1, a: 1, l: 2, o: 2, n: 1}

    for(let ch of text) {
        map[ch] = (map[ch] || 0) + 1
    }

    let min = Infinity
    for(let key in needed) {
        min = Math.min(min, Math.floor((map[key] || 0) / needed[key]))
    }
    return min 
};