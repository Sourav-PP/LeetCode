/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a - b)
    console.log(arr.length)
    let removeLength = Math.floor((arr.length * 5) / 100)
    console.log(removeLength)
    let mean;
    if(removeLength === 0) {
        let sum = arr.reduce((acc, curr) => acc + curr, 0)
        mean = sum / arr.length
    }else{
        while(removeLength) {
            let max = Math.max(...arr)
            let min = Math.min(...arr)
            arr.splice(0,1)
            arr.splice(arr.length - 1,1)
            removeLength --
        }
        console.log(arr.length)
        console.log(arr)

        let sum = arr.reduce((acc, curr) => acc + curr, 0)
        mean = sum / arr.length
    }

    return mean

};