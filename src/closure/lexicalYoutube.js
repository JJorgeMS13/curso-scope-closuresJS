/* Cada vez que se ejecuta una función en JavaScript, se crea un nuevo CONTEXTO DE EJECUCIÓN
con un nuevo ENTORNO LÉXICO. 
Uso de closure en Java1script
1._ Protege el acceso a las variables.
2._ Fabrica de funciones.
*/

function crearContador() {
    let contador = 0;
    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
}
const contador1 = crearContador();
contador1();
contador1();
console.log(contador1());

contador2 = crearContador();
console.log(contador2());