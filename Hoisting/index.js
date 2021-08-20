// Ejemplo 1

a=2;
var a;
console.log(a); // 2
//El hoisting eleva las declaraciones.
//(Osea pone el var arriba).

//Ejemplo 2

console.log(a);
var a = 2; // undefined
//Aquí no podemos acceder a ella porque no está definida

//Ejemplo 3
//Javascript solo usa el hoisting en declaraciones, no en inicializaciones.

function nameOfDog(name) {
    console.log(name);    
}

nameOfDog('Elmo');

//Aquí lo lee independientemente de si lo declaras al inicio al final.
