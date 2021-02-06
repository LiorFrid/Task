import axios from '../Axios/Axios';
const LoadData = async (page, perPage, ID) => {
    let result;
    try {
        result = await axios.get('getTrader', {
            params: {
                perPage: perPage,
                pageNumber: page,
                traderID: ID
            }
        });
    }
    catch (e) {
        throw Error(e);
    }
    const trader = {
        money: [],
        assetA: [],
        assetB: [],
        amountOfMoneyIncludeShares:[]
    };
    result.data.traderTranscations.forEach(trans => {
        trader.money.push([trans.timeStamp, trans.amountOfMoney]);
        trader.assetA.push([trans.timeStamp, trans.numOfA]);
        trader.assetB.push([trans.timeStamp, trans.numOfB]);
        trader.amountOfMoneyIncludeShares.push([trans.timeStamp, trans.amountOfMoneyIncludeShares]);

    });

    console.log(trader)

    return {
        numOfPages: result.data.numOfPages,
        trader: trader
    };
};

export default LoadData;