/* La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

Una variable declarada con var puede ser redeclarada y reasignada.
Una variable declarada con let puede ser reasignada, pero no redeclarada.
Una variable declarada con const no puede ser redeclarada, ni reasignada.
Su declaración y asignación debe ser en una línea, caso contrario habrá un error. */

var firstName; //undefined
firstName = 'José'; // reasignado
console.log(firstName);

var lasName = "David"; // declarando / asignando
lasName = "Docha"; // reasignando
console.log(lasName);
 
var secondName = 'David'; //declarando / asignando
var secondName = 'Ana'; // reasignando / redeclarando
console.log(secondName);

// let

let fruit = 'Apple' // declarar / asignar
fruit = 'kiwi'; //reasignar
//let fruit = 'Banana' no podemos reasignar con let marca error.
console.log(fruit); 

// const
const animal = 'dog'; //declara y asigna
//animal = 'cat';  no puedes reasignar en const ni redeclarar 
console.log(animal);

const vehicles = [];
vehicles.push({ model: 'NISSAN', year: 1995});

console.log(vehicles);
vehicles.pop();
console.log(vehicles);



