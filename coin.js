// var amount = 4
// var denominations = [1,2,3]
// compute the # of ways to make 0.04 amount w/ those coin denominations
// so all the permutations of denominations to add up to amount




var coins = (amount, denominations) => {

};

// recursive function to calculate how many ways we can get the remaining amount from the reamining denominations...
function changePossibilitiesTopDown(amountLeft, denominations, currentIndex) {
    currentIndex = currentIndex || 0;

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with ' + denominations.slice(currentIndex));

    // choose a current coin
    var currentCoin = denominations[currentIndex];

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += changePossibilitiesTopDown(amountLeft,
            denominations, currentIndex + 1);
        amountLeft -= currentCoin;
    }

    return numPossibilities;
}