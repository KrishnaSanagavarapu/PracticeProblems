
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


let first: number = 123;
let second: number = 0x37CF;
let third: number = 0o377;
let fourth: number = 0b111001;
console.log(first,second, third,fourth);
/*
ICC11078% tsc data-types.ts && node data-types.js 
123 14287 255 57
 */

//  console.log(first.toFixed());
//  console.log(second.toPrecision());
//  console.log(third.toLocaleString());
 console.log(first.toString());
 let y = first.toString();
 console.log(typeof y);
 console.log(y);
 console.log(first.valueOf());

 //String Type : TypeScript

 let firstName: string = 'klewjrtkl';
 let lastName: string = 'rgjelkrkr';

 //ES6 declaration

 let empFullName: string = firstName+"this is first name"+lastName+"we";

 let empFNZ: string = `${firstName} is my name ${lastName}`;

 console.log(empFullName.toUpperCase(), empFNZ.toLowerCase());

 let x: string = empFullName.concat(empFNZ);
 console.log(x);