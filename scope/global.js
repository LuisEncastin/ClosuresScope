var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World'; 
let world = 'Hello';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction ();
//  ejemplo 1: mala práctica para llamar variables.
const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar)

//  ejemplo 2: mala práctica para llamar variables.

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction ()
console.log(globalVar);