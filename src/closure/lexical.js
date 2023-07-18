/* El ámbito léxico describe cómo las funciones anidadas (también conocidas como "secundarias") tienen acceso
a las variables definidas en los ámbitos de sus padres. */

const myGlobal = 0;
function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);
    function pather() { // function interna
        const inner = 2;
        console.log(myNumber, myGlobal);
        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return pather();
}

myFunction();
