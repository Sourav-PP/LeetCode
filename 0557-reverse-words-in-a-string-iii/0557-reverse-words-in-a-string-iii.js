/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let reverse = s.split(' ').map(item => {
        return item.split('').reverse().join('')
    })

    return reverse.join(' ')
};