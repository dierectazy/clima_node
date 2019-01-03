const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        describe: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLong(direccion);
        let respClima = await clima.getClima(coords.latitud, coords.longitud);

        return `El clima en ${coords.direccion} es ${respClima.weather[0].main} y la temperatura es ${respClima.main.temp}`

    } catch (error) {
        return `No se pudo recuperara el clima de ${direccion}`
    }

}


getInfo(argv.direccion).then(resp => console.log(resp)).catch(err => console.log(err));