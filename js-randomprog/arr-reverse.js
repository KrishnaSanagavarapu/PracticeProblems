function reverse(arr) {
  var n = arr.length;
  var newArray = [];
  for (let i = n - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return arr;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

// this logic is for time complexity
// for (let i = 0 ; i <n/2; i++) {
//   var k = arr[i];
//   arr[i]= arr[n-i-1];
//   arr[n-i-1] =k;
// }
