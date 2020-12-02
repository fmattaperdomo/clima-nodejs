const axios = require("axios");

const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURL}.json`,
        //headers: { "X-Custom-Header": "foobar" },
        params: {
            access_token: "pk.eyJ1IjoiZm1hdHRhcGVyZG9tbyIsImEiOiJja2kzbWkybWoxNnRvMnJtc3l4Z21qb3U2In0.6sYqt3g-xf4ErD3SYYbJfA",
        },
    });

    const resp = await instance.get();
    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.geometry.coordinates[1];
    const lng = data.geometry.coordinates[0];

    return {
        direccion,
        lat,
        lng,
    };
};

module.exports = {
    getLugarLatLng,
};