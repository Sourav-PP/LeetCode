/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let parts = path.split('/')
    for(let ch of parts) {
        if(ch === '..') {
            stack.pop()
        } else if(ch && ch !== '.') {
            stack.push(ch)
        }
    }
    return '/' + stack.join('/')
};