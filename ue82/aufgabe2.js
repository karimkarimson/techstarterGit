function sum(a, b, callback) {
    const result = a + b;
    callback(result);
}

sum(1, 2, (result) => {
    console.log(result);
});

// Aufgabe 2: funktion waitForFive mit Promise, wartet 5000ms und gibt dann die Zahl 5 zurück.
function waitForFive() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 5000);
    });
}

// Aufgabe 3: Funktion asyncCaller ruft waitForFive auf und speichert das Ergebnis in einer Variable.
let result;
async function asyncCaller() {
    result = await waitForFive();
    return Number(result);
}
asyncCaller().then((result) => {
    console.log('hello from asyncCaller');
    console.log(result);
});

// Aufgabe 4: Funktion sleep, die Promises und setTimeout verwendet.
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
(async function () {
    await sleep(500);
    console.log('hello from sleep');
})();