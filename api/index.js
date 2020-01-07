const https = require('https');

module.exports.get = function get(url){
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
        
            resp.on('data', (chunk) => {
                data += chunk;
            });
        
            resp.on('end', () => {
                let response;
                try {
                    response = JSON.parse(data);
                } catch (error) {
                    reject(error);
                }
                resolve(response);
            });
        
        }).on("error", (err) => {
            reject({ error: err.message });
        });
    });
}

