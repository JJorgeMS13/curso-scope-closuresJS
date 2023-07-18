/* function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox(5);
moneyBox(5); */
/* Closure  nos ayuda a reducir codigo para cosas complejas*/
function myMonerBox(){
    let saveCoins = 0;
    console.log('Entro' + 1);
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const Jorge = myMonerBox();
Jorge(13);
Jorge(14);

const wife = myMonerBox();
wife(100);
wife(36);

