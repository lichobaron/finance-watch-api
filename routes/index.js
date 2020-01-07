const stockInfoController = require('../controllers/StockInfoController');
const paths = require('../constants/routes.constants');

const routes = [
    {
        method: 'GET',
        path: paths.stockInfo,
        handler: stockInfoController.getStockInfo.bind(stockInfoController)
    },
];

module.exports = routes;