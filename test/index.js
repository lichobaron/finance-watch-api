const stockInfoService = require('../services/StockInfoService');
const stockInfoServiceTests = require('./stockInfoServiceTests');

async function runTests(){
    const testSymbols = ['twtr', 'aapl'];

    for(let symbol of testSymbols){
        const response = await stockInfoService.getStockInfo(symbol);
        stockInfoServiceTests.testGetStockInfo(symbol, response);
    }
}

runTests();