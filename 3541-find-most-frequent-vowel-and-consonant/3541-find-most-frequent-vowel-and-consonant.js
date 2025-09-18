/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = /[aeiou]/
    let vowelMap = new Map()
    let map = new Map()

    for(let ch of s) {
        if(vowels.test(ch)) {
            vowelMap.set(ch, (vowelMap.get(ch) || 0) + 1)
        } else {
            map.set(ch, (map.get(ch) || 0) + 1)
        }
    }

    let maxVowel = 0
    let maxConsonant = 0

    for(let [key, value] of vowelMap) {
        if(value > maxVowel) {
            maxVowel = value
        }
    }
    for(let [key, value] of map) {
        if(value > maxConsonant) {
            maxConsonant = value
        }
    }

    return maxConsonant + maxVowel
};