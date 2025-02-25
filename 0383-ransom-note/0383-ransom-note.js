/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let ransomObj = {}
    let magazineObj = {}

    for(let ch of ransomNote) {
        ransomObj[ch] = (ransomObj[ch] || 0) + 1
    }

    for(let ch of magazine) {
        magazineObj[ch] = (magazineObj[ch] || 0) + 1
    }

    for(let ch in ransomObj) {
        if(!magazineObj[ch] || magazineObj[ch] < ransomObj[ch]) {
            return false
        }
    }

    return true


};