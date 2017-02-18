// Part 1:
  // https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-factorial-function

var factorial = n => {
  if (n === 0)
    return 1;

  return factorial(n) * factorial(n-1);
};