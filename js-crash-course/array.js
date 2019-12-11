
// arrays 
// each varuiable store one variable at a time
// but what if you need to store lists several 100's of data
// we need to create arrays
// array is a variable - declare and initialise it
// 

let a = [3,46,78,87,78];
let b =['ekwjr','werwe','werwe','werwe'];

console.log(a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

console.log(b[0]);

a[0]=7;
console.log(a);

//datatype of the array

console.log(typeof a);

//object datatype ***

//array can include data of different data types

let c = ['krishna',123,true];

console.log(c);

console.log(c[5]); // access the array outside the lenght and checked we got undeifines

console.log(a.length); // actual number , not the zero based

a[10] = 77;

// waht happens if we assign the 11 th digit to the array
console.log(a); // 
// this is the output if we access the empty[ 7, 46, 78, 87, 78, <5 empty items>, 77]

a.push(77);
console.log(a);

a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);









