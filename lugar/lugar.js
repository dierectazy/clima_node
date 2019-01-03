const axios = require('axios');


let API_KEY_GOOGLE = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';

const getLugarLatLong = async(lugar) => {
    let encodedURL = encodeURI(lugar)

    //espera lo que esto me da y guarda en respuesta
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=${API_KEY_GOOGLE}`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para el lugar ${direccion}`)
    }


    let location = respuesta.data.results[0];
    let coors = location.geometry.location;



    return {
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }
};


module.exports = {
    getLugarLatLong
}