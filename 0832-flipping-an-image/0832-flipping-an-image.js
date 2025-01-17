/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const flipped = image.map(item => {
        return item.reverse()
    })

    const inverted = flipped.map(items => {
        const invert = items.map(item => item == 1 ? 0 : 1)
        return invert
    })

    return inverted
};