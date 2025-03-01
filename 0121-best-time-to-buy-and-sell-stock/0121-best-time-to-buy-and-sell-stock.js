/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let globalProfit = 0

    for(let i=0; i<prices.length - 1; i++) {
        for(let j=i+1; j<prices.length; j++) {
            const currentProfit = prices[j] - prices[i]

            if(currentProfit > globalProfit) globalProfit = currentProfit
        }
    }

    return globalProfit
};