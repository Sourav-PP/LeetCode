/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let stack = s.split('').filter(ch => /[a-zA-Z]/.test(ch))
    let arr = []
    for(let i=0; i<s.length; i++) {
        if(/[a-zA-Z]/.test(s[i])) {
            arr.push(stack.pop())
        }else{
            arr.push(s[i])
        }
    }
    return arr.join('')
};