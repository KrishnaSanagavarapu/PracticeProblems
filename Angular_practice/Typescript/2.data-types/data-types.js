/*
    Following are the basic types in TypeScript.
        Boolean
        Number
        String
        Array
        Tuple
        Enum
        Any
        Void
        Null and Undefined
        Never

        let and const are the two types of typescript files.

        let have block-scope
        let variables cannot be re-declared


*/
var first = 123;
var second = 0x37CF;
var third = 255;
var fourth = 57;
console.log(first, second, third, fourth);
/*
ICC11078% tsc data-types.ts && node data-types.js
123 14287 255 57
 */
//  console.log(first.toFixed());
//  console.log(second.toPrecision());
//  console.log(third.toLocaleString());
console.log(first.toString());
var y = first.toString();
console.log(typeof y);
console.log(y);
console.log(first.valueOf());
//String Type : TypeScript
var firstName = 'klewjrtkl';
var lastName = 'rgjelkrkr';
//ES6 declaration
var empFullName = firstName + "this is first name" + lastName + "we";
var empFNZ = firstName + " is my name " + lastName;
console.log(empFullName.toUpperCase(), empFNZ.toLowerCase());
var x = empFullName.concat(empFNZ.valueOf());
console.log(x);
