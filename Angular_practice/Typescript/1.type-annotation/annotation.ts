/*
        js is not a typed language
        ts is typed language

        const timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
        setTimout is the 

        function myFunction() {
            setTimeout(function(){ alert("Hello"); }, 3000);
        }

        Type Annotation

        Explicit Typing
*/

const nume: number = 3;
const num2e : number[] = [1,2,3];

// Implicit Typing

const watere = 3;
const cupe = [23,32,432];

console.log(nume,num2e,watere,cupe);

console.log(typeof nume, typeof num2e,typeof watere, typeof cupe);