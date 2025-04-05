/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    let lowerCase = word.toLowerCase()
    if(!/^[a-zA-Z0-9]+$/.test(lowerCase) || word.length < 3) return false
    if(/[aeiou]/.test(lowerCase) && /[bcdfghjklmnpqrstvwxyz]/.test(lowerCase)) return true
    return false
};