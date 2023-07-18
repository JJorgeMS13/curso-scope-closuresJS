// block scope se agrego con let y const cuando declaramos una variable con las palabras reservadas antes mecionadas
//no podemos acceder desde fuera de un bloque({}) mas si la declaramos con var si podemos acceder a ella desde fuera.
function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2); //block scope
        console.log(fruit3); //block scope
    }
    console.log(fruit1); // function scope
}
fruits();