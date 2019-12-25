const fetch = require('fetch');
const fetchUrl = fetch.fetchUrl;

const asyncFetchUrl = async(url,options) => {
    
    try{
        options = options || {};
        return new Promise( (resolve,reject) => {
            fetchUrl(url,options,(error,meta,data) => {
                data = typeof data === 'undefined'?undefined:data.toString();
                resolve({
                    'error': error,
                    'meta': meta,
                    'data': data
                });
            });
        });

    }catch(err){
        return new Promise( (resolve,reject) => {
            reject({
                'error': err,
                'meta': undefined,
                'data': undefined
            });
        });
    }
   
}

/*( async() => {
    var url = "https://www.npmjs.com/package/page-dweller";
    var response = await asyncFetchUrl(url);
    console.log(response);
})();*/


module.exports = {
    'asyncFetchUrl':asyncFetchUrl
}

