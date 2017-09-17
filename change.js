
/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = getChange;  // allows CommonJS/Node.js require()
}

function getChange (totalPayable, cashPaid) {

    var returnCoins=[];

    var coins = [200, 100, 50, 20, 10, 5, 2, 1];

    if(totalPayable === cashPaid){
        return [1];
    }

    var change = cashPaid -totalPayable ;

    while (change > 0) {
        var currentCoin =coins.shift();

        if(currentCoin <= change){

            var countCurrentCoin = Math.floor(change / currentCoin);

            do{
                returnCoins.push(currentCoin);
                countCurrentCoin--;
            }while(countCurrentCoin> 0);
            change = change % currentCoin;
        }
    }


    return returnCoins;


}