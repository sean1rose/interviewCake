// var amount = 4
// var denominations = [1,2,3]
// compute the # of ways to make 0.04 amount w/ those coin denominations
// so all the permutations of denominations to add up to amount

function Change() {
    this.memo = {};
}

Change.prototype.changePossibilitiesTopDown = function(amountLeft, denominations, currentIndex) {
    
    currentIndex = currentIndex || 0;
    console.log('----- amountLeft: ', amountLeft, ' | denominations: ', denominations, ' | currentIndex: ', currentIndex);

    // check our memo to see if we've seen this set of inputs before, and if so, grab our old answer and return that...
    var memoKey = String([amountLeft, currentIndex]);
    console.log(`memoKey is ${memoKey}`);
    if (this.memo.hasOwnProperty(memoKey)) {
        console.log('*answer to that problem (memoKey) - ', memoKey, 'has been stored already -> grabbing memo[' + memoKey + '] - ', this.memo[memoKey]);
        return this.memo[memoKey];
    }

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0){
      console.log('BASE CASE #1: amountLeft === 0 so hit amount spot on!, amountLeft === ', amountLeft);
      return 1;  
    } 

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0){
        console.log('BASE CASE #2: amountLeft is < 0, so we used too many coins, amountLeft === ', amountLeft);
        return 0;
    }

    // we're out of denominations
    if (currentIndex === denominations.length){
        console.log('BASE CASE #3: out of denominations!, currentIndex === denominations.length === ', currentIndex);
        return 0;
    }

    console.log('NO BASE CASE HIT, so checking ways to make ' + amountLeft + ' with ' + denominations.slice(currentIndex));

    // choose a current coin
    var currentCoin = denominations[currentIndex];
    console.log('currentCoin - ', currentCoin);

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
        console.log(`adding ${this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1)} to numPossibilities. New numPossibilities is - ${numPossibilities} `);
        console.log(`subtracting currentCoin (${currentCoin}) from amountLeft (${amountLeft})`);
        amountLeft -= currentCoin;
        console.log(`new amountLeft after that ^ subtraction is ${amountLeft}`);
    }

    // save the answer in our memo so we don't compute it again
    this.memo[memoKey] = numPossibilities;
    console.log(`saving ${numPossibilities} to this.memo[memoKey] (${this.memo[memoKey]})`);
    console.log('returning !!! numPossibilities, which  is - ', numPossibilities);
    console.log('XXXXXXXXXXXXXXXXXXX');
    return numPossibilities;
};