/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let one = word1.reduce((acc,curr) => acc + curr, '')
    let two = word2.reduce((acc,curr) => acc + curr, '')

    if(one === two) {
        return true
    }else{
        return false
    }
};