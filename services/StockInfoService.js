const api = require('../api');
const urls = require('../constants/api');
const stockInfoSelectors = require('../selectors/stockInfo');

class StockInfoService {
    async getStockInfo (symbol) {
        const price = await api.get(urls.BASE_URL + symbol + urls.LATEST_PRICE_URL); 
        const logo = await api.get(urls.BASE_URL + symbol + urls.LOGO_URL); 
        const news = await api.get(urls.BASE_URL + symbol + urls.LASTEST_NEWS_URL);

        return {
            price, 
            logo: stockInfoSelectors.getLogo(logo), 
            news: stockInfoSelectors.getNews(news),
        }
    }
}

module.exports = new StockInfoService();