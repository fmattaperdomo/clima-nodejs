const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0a7d64fd74b33b1d2a9ba009be1c10d8&units=metric`
    );
    return resp.data.main.temp;
};

module.exports = {
    getClima,
};