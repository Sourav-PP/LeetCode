/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = []
    let map = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }

    let max = 0
    let depth = 0
    for(let i of s) {

        if(['[', '{', '('].includes(i)) {
            stack.push(i)
            depth ++
        } else if ([']', '}', ')'].includes(i)) {
            max = Math.max(depth, max)
            depth --
        }
    }

    return max
};