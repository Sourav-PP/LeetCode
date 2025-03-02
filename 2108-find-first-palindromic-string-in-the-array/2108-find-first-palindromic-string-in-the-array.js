/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let arr = []
     words.forEach(item => {
        if(item === item.split('').reverse().join('')) {
            arr.push(item)
        }
    })

    if(arr.length === 0) {
        return ''
    }else { 
        return arr[0]
    }
};