class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let price = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (price > prices[i]) price = prices[i];
            else max = Math.max(prices[i] - price, max);
        }

        return max;
    }
}
