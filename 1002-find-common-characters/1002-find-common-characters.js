/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let first = words[0]
    let result = []
    let map = new Map();
    
    for(let i of first) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    
    for(let i=0; i<first.length; i++) {
        let include = true
        for(let j=0; j<words.length; j++) {
            if(!words[j].includes(first[i])) {
                include = false
                break;
            }
            let arr = words[j].split('')
            arr.splice(words[j].indexOf(first[i]), 1)
            words[j] = arr.join('')
        }
        if(include === true) {
            result.push(first[i])
        }
        
    }
    return result
};