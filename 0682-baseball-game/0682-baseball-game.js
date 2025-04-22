/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = []
    for(let i=0; i<operations.length; i++) {
        if(!isNaN(operations[i])) {
            record.push(Number(operations[i]))
        }else if(operations[i] === 'C') {
            record.pop()
        }else if(operations[i] === 'D') {
            record.push(record[record.length - 1] * 2)
        }else {
            record.push(record[record.length - 1] + record[record.length - 2])
        }
    }

    let sum = record.reduce((acc,curr) => acc + curr, 0)
    return sum
};