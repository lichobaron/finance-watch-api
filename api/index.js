const https = require('https');

module.exports.get = function get(url){
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
        
            resp.on('data', (chunk) => {
                data += chunk;
            });
        
            resp.on('end', () => {
                console.log(data);
                resolve(JSON.parse(data));
            });
      
        }).on("error", (err) => {
            reject({ error: err.message });
        });
    });


}
