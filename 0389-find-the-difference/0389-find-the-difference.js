/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var findTheDifference = function(s, t) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of t) {
        if (!map.has(ch) || map.get(ch) === 0) {
            return ch;
        }
        map.set(ch, map.get(ch) - 1);
    }
};
};