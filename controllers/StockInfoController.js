const requestHandling = require('../utils/requestHandling');
const stockInfoService = require('../services/StockInfoService');

class StockInfoController {
    async getStockInfo (req, res, param) {
        try {            
            const result = await stockInfoService.getStockInfo(param);
            return requestHandling.success(res, result);
        }
        catch (error) {
            return requestHandling.error(res, error);
        }
    }
}

module.exports = new StockInfoController();