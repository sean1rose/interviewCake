// given an arrayOfInts, find the highest product you can get from 3 of the integers
// var arrayOfInts = [7, 1, 3, 4, 2, 100, 5];
//  var arrayOfInts = [1, 10, -5, 1, -100];

// brute force -> this doesn't work if have to very low negative #s...
var highestProduct = (arrayOfInts) => {
  var top = {};
  top.first = arrayOfInts[0];
  top.second = arrayOfInts[1];
  top.third = arrayOfInts[2];
 
  const aGreaterThanB = (a, b) => {
    console.log(`${a} > ${b} ?... `, (a > b));
    return a > b;
  }

  // make sure at least 3 items...
  for (var i = 3; i < arrayOfInts.length; i++){
    var current = arrayOfInts[i];
    // if current is greater than top #
    if (current > top.first){
      console.log('1 (current > top.first) ', current, top.first);   
      // compare old top.first w/ top.second
      if (aGreaterThanB(top.first, top.second)){
        // if true -> set top.first as new top.second
        top.second = top.first;
        console.log('new top.second - ', top.second);
      } else {
        // else false -> compare top.first w/ top.third
        if (aGreaterThanB(top.first, top.third)){
          // if true -> set top.first as new top.third
          top.third = top.first;
          console.log('new top.third - ', top.third);
        } 
      }
      // set the new top.first
      top.first = current;

      // else if current is greater than 2nd number...
    } else if (current > top.second) {
      console.log('2 (current > top.second) ', current, top.second);   
      // compare old top.second w/ top.third...
      // is 2nd greater than 3rd?
      if (aGreaterThanB(top.second, top.third)){
        // if so -> set old top.second as new top.third...
        top.third = top.second;
        console.log('new top.third (2) - ', top.third);
      } 
      // set the new top.second
      top.second = current;
      console.log('new top.second (2) - ', top.second);
    }

    // else if current is greater than 3rd number...
    else if (current > top.third) {
      console.log('3 (current > top.third) ', current, top.third);   
      top.third = current;
      console.log('new top.third (2) - ', top.third);
    }
  }
  console.log('top.first - ', top.first);
  console.log('top.second - ', top.second);
  console.log('top.third - ', top.third);
  return top.first * top.second * top.third;

}


/*
REAL SOLUTION:

Keep track of:
  -highestProductOf3
  -highestProductOf2
  -highest -> (multiply current x highest, if it's > highestProductOf2, then have new highestProductOf2)
  -lowestProductOf2
  -lowest -> (multiply current x lowest, if it's < lowestProductOf2, then have new lowestProductOf2)
*/

var highestProductOf3 = (arrayOfInts) => {
  if (arrayOfInts.length < 3) {
      throw new Error('Less than 3 items!');
  }
  //  var arrayOfInts = [1, 10, -5, 1, -100];

  // We're going to start after the first 2 items at 3rd item, so pre-populate highests and lowests based on the first 2 items.
  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

  var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

  // Except this one--we pre-populate it for the first *3* items. This means in our first pass it'll check against itself, which is fine.
  var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // walk through items, starting at index 2
  for (var i = 2; i < arrayOfInts.length; i++) {
      var current = arrayOfInts[i];

      // Do we have a new highest product of 3???
        // it's either the current highest,
        // or the current times the highest product of two
        // *or the current times the lowest product of two
      highestProductOf3 = Math.max(
          highestProductOf3,
          current * highestProductOf2,
          current * lowestProductOf2
      );

      // do we have a new highest product of two?
      highestProductOf2 = Math.max(
          highestProductOf2,
          current * highest,
          current * lowest
      );

      // do we have a new lowest product of two?
      lowestProductOf2 = Math.min(
          lowestProductOf2,
          current * highest,
          current * lowest
      );

      // do we have a new highest?
      highest = Math.max(highest, current);

      // do we have a new lowest?
      lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

// O(n) time and O(1) additional space.