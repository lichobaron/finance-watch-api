const getError = require('../selectors/error').getError;

module.exports.testGetStockInfo = function testGetStockInfo(symbol, resp){
    console.log("testing symbol: ", symbol, "...");
    let succes = true;
    if(!resp.price || getError(resp.price)){
        console.error("StockInfoServiceTest -> testGetStockInfo fail! Price error.");
        succes = false;
    }
    if(!resp.logo || getError(resp.logo)){
        console.error("StockInfoServiceTest -> testGetStockInfo fail! Logo error.");
        succes = false;
    }
    if(!resp.news || getError(resp.news)){
        console.error("StockInfoServiceTest -> testGetStockInfo fail! News error.");
        succes = false;
    }
    if(succes)
        console.log("successfull test: StockInfoServiceTest -> testGetStockInfo");
}