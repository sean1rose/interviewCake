// var list = [1, 7, 3, 4]

var getProductsOfAllIntsExceptAtIndex(arr) = () => {
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
}