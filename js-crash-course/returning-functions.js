
// var myVariable = ' I m at the glova';

// var myFunction = function(){
//     console.log('mee too!');
// }


function one(){
    return 'one';
}

let value =one();
console.log(value);

console.log(typeof one);

// string number boolean undefined function 

function two(){
    return function(){
        console.log('two');
    }
}

let myFunction = two();

myFunction();

function three(){
    return function(){
        return 'three';
    }
}

console.log(three()());

