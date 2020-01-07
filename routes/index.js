const stockInfoController = require('../controllers/StockInfoController');
const paths = require('../constants/routes');

const routes = [
    {
        method: 'GET',
        path: paths.STOCK_INFO,
        handler: stockInfoController.getStockInfo.bind(stockInfoController)
    },
];

module.exports = routes;