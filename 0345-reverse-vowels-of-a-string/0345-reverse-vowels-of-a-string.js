/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = s.split('').filter(item => item.match(/[aeiouAEIOU]/)).reverse()
    let i = 0

    let result = s.split('').map(item => {
        if(/[aeiouAEIOU]/.test(item)) {
            return vowels[i++]
        }
        return item
    })

    return result.join('')
};