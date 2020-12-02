/**
 * node app -d San Jose Costa Rica
 * node app -d madrid españa
 *
 */

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const getInfo = async(direccion) => {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);

    try {
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

// lugar.getLugarLatLng(argv.direccion).then(console.log).catch(console.log);
// clima.getClima(40.7648, -73.9808).then(console.log).catch(console.log);

getInfo(argv.direccion).then(console.log).catch(console.log);