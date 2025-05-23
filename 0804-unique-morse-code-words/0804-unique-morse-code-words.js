/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    let transformations = new Set()

    for(let word of words) {
        let morse = ""
        for(let ch of word) {
            morse += morseCode[ch.charCodeAt(0) - 97]
        }
        transformations.add(morse)
    }
    return transformations.size
};