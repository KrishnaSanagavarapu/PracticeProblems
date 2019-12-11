
var arr = [1,2,3];
var n = arr.length;

for(var i=0; i<n; i++){
  arr[i]=arr[0]
  
}

console.log(arr[i]);
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line
  for (let n =0 ; n< s.length; n++){
   s[n] = s[s.length- n-1];
  // s = [2, 5, 7]; <- this is invalid
  return s;
  }
  // change code above this line
}
editInPlace();
console.log(editInPlace());
console.log(editInPlace());
