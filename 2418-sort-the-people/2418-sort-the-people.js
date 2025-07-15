/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let obj = {}
    for(let i=0; i<names.length; i++) {
        obj[heights[i]] = names[i]
    }
    
    const arr = Object.entries(obj)
    const sorted = arr.sort((a,b) => b[0] - a[0])
    const newOrder = sorted.flatMap(a => a[1])

    return newOrder

};