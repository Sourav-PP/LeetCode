/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let i = 0
    let substring = ''
    if(!(word.split('').includes(ch))) return word
    if(word.length === 1) return word
    while(word[i] !== ch) {
        substring += word[i]
        i++
    }
    substring += word[i]

    if(substring.length === word.length) return word.split('').reverse().join('')
    return substring.split('').reverse().join('') + word.split('').slice(-(word.length - (substring.length))).join('')
};