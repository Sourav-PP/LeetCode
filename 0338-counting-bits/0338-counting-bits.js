/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = new Array()
    let result = new Array()
    for(let i=0; i<=n; i++) {
        arr.push(i)
    }
    arr.forEach(item => {
        let binary = item.toString(2)
        let count = 0
        
        for(let ch of binary) {
            if(ch == '1') {
                count ++
            }
        }
        result.push(count)
    })
    return result

};