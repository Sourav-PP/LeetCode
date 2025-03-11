/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b)
    const result = []
    let min = Infinity

    for(let i=0; i<arr.length-1; i++) {
        let diff = arr[i+1] - arr[i]
        min = Math.min(min, diff)
    }

    for(let i=0; i<arr.length-1; i++) {
        if(arr[i+1] - arr[i] == min) {
            result.push([arr[i],arr[i+1]])
        }
    }

    return result
};