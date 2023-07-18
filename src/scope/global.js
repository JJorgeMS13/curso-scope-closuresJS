// variables

var a; // declaramos
var b = 'b'; // declaramos / asignamos
b = 'bb'; //Reasignacion
var a = 'aa'; //redeclaracion

//Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}
bestFruit();
// No declarar una variable crea una variable global por defecto

function some() {
    barco = 'Titanic';
    console.log(barco);
}
some();
console.log(barco);
// function Scope

