/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false

    let objS = {}
    let objT = {}

    for(let i=0; i<s.length; i++) {
        let charS = s[i]
        let charT = t[i]

        if(objS[charS] !== undefined) {
            if(objS[charS] !== charT) {
                return false
            }
        }else{
            if(objT[charT] !== undefined) {
                return false
            }

            objS[charS] = charT
            objT[charT] = charS
        }
    }
    return true
};