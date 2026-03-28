/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    return numericValue(firstWord) + numericValue(secondWord) === numericValue(targetWord)
};

function numericValue(word) {
    let value = ""
    for(let ch of word) {
        value += ch.charCodeAt(0) - 97
    }

    return Number(value)
}