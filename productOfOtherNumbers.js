// var list = [1, 7, 3, 4];

// O(n)^2 solution
var getProductsOfAllIntsExceptAtIndex = (arr) => {
  // brute force
  var result = [];
  for (var i = 0; i < arr.length; i++){
    var current = arr[i];
    var product = 1;
    for (var j = 0; j < arr.length; j++){
      if (i !== j){
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
};



// 2ND ANSWER...
[2, 4, 10]
// the product of all integers except the integer at each index is equal to #1 & #2
// BREAK DOWN INTO 2 COMPONENT SUB PARTS
  // 1. find product of all integers before each index
  // 2. find product of all integers after each index.

var getProductsOfAllIntsExceptAtIndex = (intArray) => {
  var productsOfAllIntsExceptAtIndexResult = [];

  // 1. finding product of all integers BEFORE each index...
  var productSoFar = 1;
  // for each integer, find the [product of all the integers before it], storing the [total product so far] each time
  for (var j = 0; j < intArray.length; j++){
    productsOfAllIntsExceptAtIndexResult[j] = productSoFar;
    productSoFar *= intArray[j];
  }
  // [1, 2, 8]


  // 2. find product of all integers AFTER each index...
  // HOW? -> walk through our array backwards! reverse-for-loop!
  // var productsOfAllIntsAFTERIndex = [];
  productSoFar = 1;
  for (var j = intArray.length - 1; j >= 0; j--){
    // since each index in RESULT already has the product of all integers before, now just store the total product of all otehr integers...
    productsOfAllIntsExceptAtIndexResult[j] *= productSoFar;
    productSoFar *= intArray[j];
  }
  // [40, 10, 1]

  return productsOfAllIntsExceptAtIndexResult;
}

// O(n) time and O(n) space.