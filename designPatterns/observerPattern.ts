import {EventEmitter} from 'events';
interface TemperatureDetails {
    climate: string;
    temperature: string;
}
class WeatherService extends EventEmitter {
    constructor() {
        super();
        console.log(this);
    }
    emitTemperature() {
alert(1)
    }
}

class Temperature {
constructor(weatherService: WeatherService){

}
}

const weatherService = new WeatherService();
weatherService.emitTemperature();