/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 买股票始终记住有两个情况，
// 手上持有股票，和手上不持有股票。
// 第一天手上就持有股票，意义是，第一天就买了 price[0]的股票，因为不知道prices[0] 的值是多少，所以给持有成本一个负无穷。
// 最后肯定是不持有手上没股票了，现金更多。
var maxProfit = function (prices, fee) {
  let 今天不持有 = 0;
  let 今天持有 = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    // 今天不持有，2 cases，1 今天继续不持有，2 昨天持有了，今天要把股票卖了，收入是今天的价格，
    今天不持有 = Math.max(今天不持有, 今天持有 + prices[i]);
    // 今天持有，2 cases， 1今天继续持有，不卖，2，昨天不持有，今天买入，买的同事顺便出手续费
    今天持有 = Math.max(今天持有, 今天不持有 - prices[i] - fee);
  }
  return 今天不持有;
};
