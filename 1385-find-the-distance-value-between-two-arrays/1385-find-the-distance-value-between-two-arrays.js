/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0
    for(let i=0; i<arrr1.length; i++) {
        let invalid = false
        for(let j=0; j<arr2.length; j++) {
            if(Math.abs(arr[i] - arr[j]) <= d) {
                invalid = true
                break
            }
        }
        if(invalid === true) {
            count ++
        }
    }
    return count
};