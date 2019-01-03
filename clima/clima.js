const axios = require('axios');
let API_KEY_OPEN_WEATHER_MAP = '2ec2ab5745b31be7c13a87c57aa7a96e';


const getClima = async(latitud, longitud) => {

    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${API_KEY_OPEN_WEATHER_MAP}&units=metric&lang=es`)

    if (respuesta.cod === '200') {
        return respuesta.data;
    } else {
        return respuesta.data;;
    }

};


module.exports = {
    getClima
}