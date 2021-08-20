//Ejemplo sencillo de scope local
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld ()
// A este console log no puede acceder
//porque no está definido en global.
console.log(hello);

//Ejemplo de cómo se muestra el scope local en:
//Ámbito léxico

var scope = "i am global"

const functionScope = () => {
    var scope = " i am just a local";
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope ();
//Si colocamos otro console log, ahora tomará 
//la variable global.
console.log(scope);