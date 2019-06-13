const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

class Countries {
    constructor(url) {
        if (typeof url !== 'string') {
            throw new Error('url must be a string')
        }
    }
    send(size) {
        if (typeof size !== 'number') {
            throw new Error('size must be a number')
        }
        return new Promise((resolve, reject) => {
            get(url+'?size='+size, (error, meta, body) => {
                const { data } = JSON.parse(body);
                if (meta.status == 200) {
                    resolve(data)
                } else {
                    reject(`We have error, status code: ${meta.status}`)
                }
            })
        });
    }
}

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();