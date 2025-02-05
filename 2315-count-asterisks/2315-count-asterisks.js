/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
   let arr = s.split('')
    let inside = false
    let count = 0
    
    arr.forEach(item => {
        if(item ==='|'){
            inside = !inside
        }
        if(item === '*' && inside === false ) {
            count ++
        }
    })
    return count
};