// [x, y, z]
// index ---> minutes past trade-opening time (9:30 am)
  // 0 -> 9:30
  // 1 -> 9:31AM

// value (x) --->  price in $ of Apple Stock at that time

// var stockPricesYesterday = [];

// stock cost $500 at 10:30AM
// stockPricesYesterday[60] = 500;

var stockPricesYesterday = [10, 7, 5, 8, 11, 9, 4];

// getMaxProfit(stockPricesYesterday);
  // --> returns 6 (buy at $5, sell at $11)

// 1st ITERATION
var getMaxProfit = (stockPricesArray) => {
  var low = {i: 0, v: stockPricesArray[0]};
  var high = {i: 0, v: stockPricesArray[0]};
  var maxProfit = 0;
  if (stockPricesArray.length < 2 || (stockPricesArray.length == 2 && stockPricesArray[0] > stockPricesArray[1])){
    // if only 1 or 0 items in array OR if 2 items and stock price goes down
    return 'no answer';
  }
  // need to take into account prices go down the entire day
  for (var i = 1; i < stockPricesArray.length; i++) {
    // compare each step w/ low
    var currentPrice = stockPricesArray[i];
    // if current price is lower than lowPrice
    if (currentPrice < low.v){
      // set this low as new low
      low.i = i;
      low.v = currentPrice;
      // when u set a new low, reset high as current number
      high.i = i;
      high.v = currentPrice;
    }
    // otherwise if current price is higher than highestPrice
    else if (currentPrice > high.v){
      // set new highestPrice
      high.i = i;
      high.v = currentPrice;
      // grab the new best profit...
      var tmpProfit = high.v - low.v;
      if (tmpProfit > maxProfit){
        maxProfit = tmpProfit;
      }
    }
  }
  return maxProfit;
};


// 2nd ITERATION...
var getMaxProfit2 = function(prices) {
  if (prices.length < 2 || (prices.length == 2 && prices[0] > prices[1])){
    // if only 1 or 0 items in array OR if 2 items and stock price goes down
    // return 'no answer';
    throw new Error('need at least 2 prices')
  }
  var lowestPrice = prices[0];
  
  // var maxProfit = 0;
  var maxProfit = prices[1] - prices[0];

  // start at 2nd time (since have to by 1st)
  for (var i = 1; i < prices.length; i++){
    // 1)
    var currentPrice = prices[i];

    // 2)
    // calc what our potential profit would be at this current price...
    var potentialProfit = currentPrice - lowestPrice;

    // 3) (DO THIS STEP AFTER STEP 4)
    // ensure lowestPrice is lowest we've seen so far...
    lowestPrice = Math.min(lowestPrice, currentPrice);

    // SWITCH Steps 3 and 4 around

    // 4) DO THIS STEP (STEP 4) BEFORE STEP 3!!!
    // CALCUALTE MAXPROFIT BEFORE UPDATING LOWESTPRICE (this ensures we're always buying at earlier price, and never the current rpice)
    // update maxProfit if it's better...
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

// COMPLEXITY:
// O(n) time and O(1) space. Only loop thru the array once, updating the value as we go along...