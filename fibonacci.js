// https://www.youtube.com/watch?v=UxICsjrdlJA
// https://www.safaribooksonline.com/library/view/javascript-the-good/9780596517748/ch04s15.html

// https://www.sitepoint.com/implementing-memoization-in-javascript/

// *** BEST RESOURCE *** (on page 208)
// http://cdn.tsq.me/ebook/Data%20Structures%20and%20Algorithms%20with%20JavaScript.pdf

// recursive
var fibonacci = n => {
  if (n <= 1)
    return n;
  
  return fibonacci(n-1) + fibonacci(n-2);
};
// fibonacci(10)
  // -> calls fib func 453 times!! (cal it 11 times, but it calls itself 442 times - think of recursion tree)

// DYNAMIC PROGRAMMING:
  // an algorithm designed using DP starts by solving the simplest subproblem possible, storing that solution, then using that solution to solve more complex subproblems until the entire problem is solved.
    // the solutions to each subproblem are typically stored in an array for easy access
  // recursive using memoization (where you store answers for use later on)...
var fibonacci = n => {
  var memo = [0,1];
  // var memoObj = {0: 0, 1: 1};
  var fib = n => {
    var result = memo[n];
    // var result = memoObj[n];

    // if memo at index doesn't yet exist...
    if (typeof result !== 'number') {
      result = fib(n-1) + fib(n-2);
      memo[n] = result;
      // memoObj[n] = result;
      console.log(`*memo at ${n} is - ${memo} | *memo[n] is ${memo[n]} `);
      // console.log(`*memo at ${n} is - ${memoObj} | *memo[n] is ${memoObj[n]} `);
    }
    return result;
  }
  return fib(n);
};
// fibonacci(44)