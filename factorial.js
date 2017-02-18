// Part 1:
  // https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-factorial-function

// iterative factorial...
function factorialize(num) {
  var factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// recursive...
var factorial = n => {
  if (n === 0){
    return 1;
  } else {
    return n * factorial(n-1);
  }
}