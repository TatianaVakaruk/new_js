const PRICE_THRESHOLD = 1000;

/**
 * @param {number[]} prices
 * @param {number} avgPrice
 * @return {boolean}
 */
function checkPrices(prices, avgPrice) {
  // put your code here
  for (let i = 0; i < prices.length; i++){
    if ((prices[i] - PRICE_THRESHOLD > avgPrice) || (prices[i] + PRICE_THRESHOLD < avgPrice)) {
      return false;
      break;
    } 
}
return true;
}
console.log(checkPrices([101, 80, 99], 100));
console.log(checkPrices([12000, 1200, 3000], 2000));
console.log(checkPrices([5, 10, 14], 1200));