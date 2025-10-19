/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let arr = []
    for(let i=0; i<prices.length; i++) {
        for(let j=0; j<prices.length; j++) {
            if(i !== j && prices[i] + prices[j] <= money) {
                arr.push(money - (prices[i] + prices[j])) 
            }
        }
    }
    if(arr.length) {
        return Math.max(...arr)
    } else {
        return money
    }
};