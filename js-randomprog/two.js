// let arr1 = [1,2,3,4];

// let arr2 = [3,4,5,6];

// let arr3 = arr1.concat(arr2);

// let arr4 = arr1+arr2;

// console.log(arr3);
// console.log(arr4);

// function getContainer(product) {
// 	let container;
//   switch (product) {
// 		case "Bread":container = "bag";break;
// 		case "Beer":
// 		case "Milk":container = "bottle"; break;
// 		case "Cerials": container = "box"; break;
// 		case "Eggs": container = "carton"; break;
// 		case "Candy": container = "plastic"; break;
// 		default: container = null;
// 	}	return container;
// }
// console.log(getContainer("Bread"));// ➞ "bag"


// console.log(getContainer("Beer"));// ➞ "bottle"


// console.log(getContainer("Candy"));// ➞ "plastic"


// console.log(getContainer("Cheese"));// ➞ null


// function check(arr, el) {
// 	return arr.indexOf(el) == -1 ? false: true;
// }

// console.log(check([1, 2, 3, 4, 5], 3));  // ➞ true

// console.log(check([1, 1, 2, 1, 1], 3));  // ➞ false

// console.log(check([5, 5, 5, 6], 5));  // ➞ true

// console.log(check([], 5));  // ➞ false

// function find_index(arr, str) {
//    return arr[arr.indexOf(str)];
// }

// //find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// console.log(find_index(["hi", "edabit", "fgh", "abc"], "fgh"));

//const helloName = name => 

//helloName("Gerald") ➞ "Hello Gerald!"

// function helloName(name){
//     return "Hello"+" "+name;
// }

// console.log(helloName("krishna"));

const helloName = name => "Hello"+" "+name+"!";

console.log(helloName("krishna"));

//helloName("Gerald") ➞ "Hello Gerald!"
// const helloName = name => "Hello"+" "+name+"!";

// console.log(helloName("krishna"));

//helloName("Gerald") ➞ "Hello Gerald!"


// function equalSlices(total, people, each) {
//    if(total >= people*each){
//        return true;
//    } else {
//        return false;
//    }
// }

//console.log(equalSlices(11, 5, 2));// ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices

//console.log(equalSlices(11, 5, 3)); //➞ false
// 5 people x 3 slices each = 15 slices > 11 slices

//console.log(equalSlices(8, 3, 2)); // ➞ true

//equalSlices(8, 3, 3) //➞ false

//equalSlices(24, 12, 2)// ➞ true


// function negate(arr) {
//     return  arr.map(x => x * -1);
// }

// console.log(negate([]));


// function match(s1, s2) {
//     let x = s1.toLowerCase().split(' ').sort().join(" ");
//     let y = s2.toLowerCase().split(' ').sort().join(" ");

//     console.log(s1.toLowerCase().split(' ').sort().join(" "));
//     console.log(s1.toLowerCase().split(' ').sort());
//     console.log(s1.toLowerCase().split(' '));

//     console.log(s2.toLowerCase().split(' ').sort());
//     console.log(s2.toLowerCase().split(' '));

//     if(x == y) {
//     return true
//     }
//     return false
//     }

    //     if(s1.localeCompare(s2) === 1){
//         return true;
//     } else {
//         return false;
//     }
// }

// var s1 = "venom";
// var s2 = "VENOM";
// console.log(match(s1,s2));

