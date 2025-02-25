/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let types = new Set(candyType).size
    let length = (candyType.length) / 2

    return Math.min(types, length)

};