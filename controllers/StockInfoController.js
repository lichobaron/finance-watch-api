const requestHandling = require('../utils/requestHandling');
const stockInfoService = require('../services/StockInfoService');
const logService = require('../services/LogService');

class StockInfoController {
    async getStockInfo (req, res, param) {
        let validResponse = false;
        try {            
            const result = await stockInfoService.getStockInfo(param);
            validResponse = stockInfoService.isStockInfoValid(result);
            logService.logRequest(req, validResponse);
            return requestHandling.success(res, result);
        }
        catch (error) {
            logService.logRequest(req, validResponse);
            return requestHandling.error(res, error);
        }
    }
}

module.exports = new StockInfoController();