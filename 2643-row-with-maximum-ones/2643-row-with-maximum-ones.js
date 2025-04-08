/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let map = new Map()
    mat.forEach((item, index) => {
        let count = 0
        for(let i=0; i<item.length; i++) {
            if(item[i] === 1) {
                count++
            }
        }
        map.set(index, count)
    })
    let max = Math.max(...map.values())

    for(let [key,value] of map) {
        if(value === max) {
            return [key, value]
        }
    }
};