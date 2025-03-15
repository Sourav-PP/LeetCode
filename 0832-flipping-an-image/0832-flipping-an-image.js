/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let result = image.map(item => {
        return item.reverse().map(item => {
            return item === 1 ? 0 : 1
        })
    })

    return result
};