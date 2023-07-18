/* El concepto Hoisting sucede por que el compilador de javaScript lo que hace es elevar las declaraciones de 
variables y funciones al principio de todo el script.*/
/* console.log(gretting);
var gretting = 'Hello';
saluda();
function saluda(){
    console.log('Hello from the function!');
} */

const sayHi = () => {
    return (() => 'Hi Javascript!')();
  };
  
  console.log(typeof sayHi());