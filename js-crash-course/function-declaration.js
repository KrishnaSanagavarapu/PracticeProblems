
//function declaration 
//fucntion is the block of code, by the name and then we can execute it again
//primary constructs in js

// function sayHello(){
//     console.log('krishna');
//     console.log('this is from signet');
// }

// // we use the function to declare functions followed by the name with curly braces in the container
// //sayHello();

// let a =sayHello; 

// a();
// a();
// a();

function sayHello(name){
    console.log('krishna');
    console.log('this is from signet'+name+'thiuhiu');
}

sayHello('bob');
sayHello('krishna');

// create a new argument with a 


// fucntion with a return type

function calculateTac(amount){
    let result = amount *0.16;
    return result
}

let tax = calculateTac(100);

console.log(tax);
