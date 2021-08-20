const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout (() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction ();

//Ambito del bloque y del closure trabajando juntos,lo que nos permite trabajar este loop de forma correcta.
//Podemos crear closures de forma involuntaria y debemos tener cuidado al crear estos bloques.