/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let i = 0;
    let j = s.length - 1
    let arr = s.split('')

    while(i <= j) {
        if(!arr[i].match(/[a-zA-Z]/) && !arr[j].match(/[a-zA-Z]/)) {
            i ++
            j --
        }else if(!arr[i].match(/[a-zA-Z]/)) {
            i++
        }else if(!arr[j].match(/[a-zA-Z]/)) {
            j--
        }else{
            [arr[i], arr[j]] = [arr[j],arr[i]]
            i++
            j--
        }
    }

    return arr.join('')

};