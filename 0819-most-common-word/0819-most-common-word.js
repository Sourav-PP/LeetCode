/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
     let words = paragraph.toLowerCase().split(/[^a-z]+/);
    let obj = {}

    for(let word of words) {
        if (word) obj[word] = (obj[word] || 0) + 1;
    }

    let entries = Object.entries(obj).filter(([key]) => !banned.includes(key))
    let maxEntry = entries.reduce((max, curr) => curr[1] > max[1] ? curr : max, ['',0])

    return maxEntry[0]
};