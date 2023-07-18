// function Scope, solo se puede acceder a una variable desde dentro de la funcion donde fue declarada.
function greeting() {
    let useName = 'Ana';
    if (useName === 'Ana') {
        console.log(`Hello ${ useName }!`);
    }
}

greeting();
console.log(useName);