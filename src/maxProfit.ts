export const maxProfit = (prices: Array<number>): number => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

const testCases = [
  {
    prices: [7, 1, 5, 3, 6, 4],
    exp: 5,
  },
  {
    prices: [7, 6, 5, 4, 3, 1],
    exp: 0,
  },
];

testCases.forEach(testCase => {
  const res = maxProfit(testCase.prices);
  if (res !== testCase.exp) {
    console.log('Failed\n exp: ', testCase.exp, '\n got', res);
  }
});
