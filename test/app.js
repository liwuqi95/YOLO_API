const IP = 'http://192.168.168.30';
const PORT = '1234';
const URL = `${IP}:${PORT}`
const axios = require('axios');

async function load() {
    let response = await axios.get(URL + '/load');
    console.log(response.data);
}

function main() {
    load().then(() => {
        
    })
}

main();