/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [[1]]

    for(let i=1; i<numRows; i++) {
        let prevRow = triangle[i - 1]
        let row = []
        
        for(let j=0; j<=i; j++) {
            let left = prevRow[j - 1] || 0
            let right = prevRow[j] || 0
            row.push(left + right)
        }
        triangle.push(row)
    }

    return triangle;
};