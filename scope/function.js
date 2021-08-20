// Ejemplo básico de scope local y global.
const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits ();
console.log (fruit);

//Ejercicio var y let en local

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();