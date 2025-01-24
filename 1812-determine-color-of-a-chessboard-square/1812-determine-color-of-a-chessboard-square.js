/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    if(Number(coordinates[0].charCodeAt(0))%2 == 0 && Number(coordinates[1])%2 == 0){
        return false
    }
    if(Number(coordinates[0].charCodeAt(0))%2 != 0 && Number(coordinates[1]%2 != 0 )) {
        return true
    }
    if(Number(coordinates[0].charCodeAt(0))%2 == 0 && Number(coordinates[1])%2 != 0){
        return true
    }
    if(Number(coordinates[0].charCodeAt(0))%2 != 0 && Number(coordinates[1]%2 == 0 )) {
        return true
    }
};