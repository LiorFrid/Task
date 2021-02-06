const fs = require('fs');

const express = require('express');
const cors = require('cors');

const AvgOfAssest = require('./Models/AvgOfAssest');
const Trader = require('./Models/Trader');

const app = express();

const assests = JSON.parse(fs.readFileSync('./ProjectData/data.json', 'utf8'));
const tradesAOData = JSON.parse(fs.readFileSync('./ProjectData/tradesAO.json', 'utf8'));
const tradesASData = JSON.parse(fs.readFileSync('./ProjectData/tradesAS.json', 'utf8'));

const avgAssetA = new AvgOfAssest(assests, 'assetA');
const avgAssetB = new AvgOfAssest(assests, 'assetB');

const TraderAS = new Trader(assests, tradesASData);
const TraderAO = new Trader(assests, tradesAOData);

app.use(cors());

app.get('/getAvgOfAssests', (req, res) => {
    let { perPage, pageNumber } = req.query;
    perPage = Number(perPage);
    pageNumber = Number(pageNumber);

    res.send({
        avgAssetA: avgAssetA.getValues(pageNumber * perPage, (pageNumber + 1) * perPage),
        avgAssetB: avgAssetB.getValues(pageNumber * perPage, (pageNumber + 1) * perPage),
        numOfPages: parseInt(Math.max(avgAssetA.getNumberOfValues() / perPage, avgAssetB.getNumberOfValues() / perPage))
    });
});

app.get('/getTrader', (req, res) => {
    let { perPage, pageNumber, traderID } = req.query;
    perPage = Number(perPage);
    pageNumber = Number(pageNumber);

    let findTrader;
    switch (traderID) {
        case ('AS'):
            findTrader = TraderAS;
            break;
        case ('AO'):
            findTrader = TraderAO;
            break;
        default:
    }

    res.send({
        traderTranscations: findTrader.getTranscations(pageNumber * perPage, (pageNumber + 1) * perPage),
        numOfPages: parseInt(findTrader.getNumOfTracnsctions() / perPage)
    });
});

app.listen(3001, () => console.log('server started'));