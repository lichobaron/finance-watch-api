const requestHandling = require('../utils/requestHandling');

class StockInfoController {
    async getStockInfo (req, res, param) {
        try {
            
            const harCodeData = {
                hello: param
            }

            return requestHandling.success(res, harCodeData);
        }
        catch (error) {
            return requestHandling.error(res, error);
        }
    }
}

module.exports = new StockInfoController();