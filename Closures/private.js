const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person ();
console.log(newPerson.getName());
newPerson.setName('Oscar');
console.log(newPerson.getName());
// En este ejemplo, no cambiamos el valor de saveName
// Podemos asignar uno nuego, pero a través de otra función
// Que se encuentre en su ámbito.