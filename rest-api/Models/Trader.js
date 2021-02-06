
class Trader {
    transactionOverTime = [];

    constructor(assests, trades) {
        this.initliazeTrader(assests, trades);
    }

    initliazeTrader(assests, trades) {
        let numOfA = 0;
        let numOfB = 0;
        let amountOfMoney = 0;
        let amountOfMoneyIncludeShares = 0;
        this.transactionOverTime = trades.map(trade => {
            trade.actions.forEach(action => {
                switch (action) {
                    case ('sellA'):
                        numOfA -= 1;
                        amountOfMoney += +assests[trade.time].assetA.bid;

                        break;
                    case ('buyA'):
                        numOfA += 1;
                        amountOfMoney -= +assests[trade.time].assetA.ask;
                        break;
                    case ('sellB'):
                        numOfB -= 1;
                        amountOfMoney += +assests[trade.time].assetB.bid;
                        break;
                    case ('buyB'):
                        numOfB += 1;
                        amountOfMoney -= +assests[trade.time].assetB.ask;
                        break;
                    default:

                }
            });
            amountOfMoneyIncludeShares = amountOfMoney
                + (+assests[trade.time].assetA.bid * numOfA)
                + (+assests[trade.time].assetB.bid * numOfB)
                - (+assests[trade.time].assetA.ask * numOfA)
                - (+assests[trade.time].assetB.ask * numOfB)
            return {
                timeStamp: trade.time,
                numOfA: numOfA,
                numOfB: numOfB,
                amountOfMoney: +amountOfMoney.toFixed(2),
                amountOfMoneyIncludeShares: +amountOfMoneyIncludeShares.toFixed(2)
            };
        });
    }

    getTranscations(start, end) {
        return this.transactionOverTime.slice(start, end);
    }

    getNumOfTracnsctions() {
        return this.transactionOverTime.length;
    }
}

module.exports = Trader;