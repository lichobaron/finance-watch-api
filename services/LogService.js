const fs = require('fs');
const url  = require('url');
const LOG_PATH = require('../constants/log').LOG_PATH;

class LogService {
    constructor(){
        this.stream = fs.createWriteStream(LOG_PATH, {flags:'a'});
    }

    logRequest(req, validResponse) {
        const logString = this.getRequestUrlPath(req) + ', ' + this.getDateTime() + ', ' + validResponse + '\n';
        this.stream.write(logString);
    }

    getDateTime(){
        const dt = new Date();
        const dateString =
            ("0" + (dt.getMonth()+1)).slice(-2) + "/" +
            ("0" + dt.getDate()).slice(-2) + "/" +
            (dt.getFullYear().toString()).slice(-2) + " " +
            ("0" + dt.getHours()).slice(-2) + ":" +
            ("0" + dt.getMinutes()).slice(-2) + ":" +
            ("0" + dt.getSeconds()).slice(-2);
        return dateString;
    }

    getRequestUrlPath(req){
        let url_parts = url.parse(req.url);
        return url_parts.pathname;
    }
}

module.exports = new LogService();