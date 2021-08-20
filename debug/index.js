//Ejemplo 1

var a = 'Hello'; //Global

function hello() {
    let b = 'Hello World';
    const c = 'Hello World!'//loca
    if (true) {
        let d = 'Hello World!!' //bloque
        debugger
    }
}

hello();

//Ejemplo 2

const moneyBox = ()  => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);