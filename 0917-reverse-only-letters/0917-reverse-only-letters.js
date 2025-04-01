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
            [arr[i+1], arr[j]] = [arr[j], arr[i+1]]
            i+=2
            j--
        }else if(!arr[j].match(/[a-zA-Z]/)) {
            [arr[j-1], arr[i]] = [arr[i], arr[j-1]]
            i++
            j-=2
        }else{
            [arr[i], arr[j]] = [arr[j],arr[i]]
            i++
            j--
        }
    }

    return arr.join('')

};