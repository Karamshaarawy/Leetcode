/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price encountered so far
        minPrice = Math.min(minPrice, prices[i]);
        // Calculate the profit if we sell at the current price
        profit = Math.max(profit, prices[i] - minPrice);
    }

    return profit;
};