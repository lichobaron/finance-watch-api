const api = require('../api');
const urls = require('../constants/api');
const stockInfoSelectors = require('../selectors/stockInfo');
const getError = require('../selectors/error').getError;

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

    isStockInfoValid(stockInfo){
        let valid = true;

        if(!stockInfo.price || getError(stockInfo.price))
            valid = false;
        
        if(!stockInfo.logo || getError(stockInfo.logo))
            valid = false;
        
        if(!stockInfo.news || getError(stockInfo.news))
            valid = false;

        return valid;
    }
}

module.exports = new StockInfoService();