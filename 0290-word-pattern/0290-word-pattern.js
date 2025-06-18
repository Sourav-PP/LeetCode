/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let p = pattern.split('')
    let words = s.split(' ')

    if(p.length !== words.length) return false

    let mapP = Object.create(null)
    let mapS = Object.create(null)

    for(let i=0; i<p.length; i++) {
        let charP = p[i]
        let charS = words[i]

        if(mapP[charP] !== undefined) {
            if(mapP[charP] !== words[i]) {
                return false
            }
        }else{
            if(mapS[charS] !== undefined) {
                return false
            }
            mapP[charP] = words[i]
            mapS[charS] = p[i]
        }
    }
    return true
    
};