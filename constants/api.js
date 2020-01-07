const API_KEY = 'pk_6a5319035ebc45d88e4b6f3ecc8daf0a';

const TOKEN_PARAM = '?token=' + API_KEY;

module.exports.BASE_URL = 'https://cloud.iexapis.com/stable/stock/';

module.exports.LATEST_PRICE_URL = '/quote/latestPrice' + TOKEN_PARAM;

module.exports.LOGO_URL = '/logo' + TOKEN_PARAM;

module.exports.LASTEST_NEWS_URL = '/news/last/1' + TOKEN_PARAM;