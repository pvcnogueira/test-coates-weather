import type {TWeatherDetail} from "../types/weather.type.ts";
import type {TForecast, TForecastResponse} from "../types/forecast.type.ts";

/**
 * Method created to normalize the forecast API return to a format already known and typed, weather
 *
 * @param forecastData
 */
const normalizeForecastToWeather = (forecastData: TForecast): TForecastResponse[] => {
    let response: TForecastResponse[] = [];
    const today = new Date();
    let tempForecast: Record<string, Array<number>> = {};
    forecastData.list.forEach(forecast => {
        const dt = forecast.dt_txt.split(' ')[0];
        if (!tempForecast[dt]) {
            tempForecast[dt] = [];
        }
        tempForecast[dt].push(forecast.main.temp_min, forecast.main.temp_max);
    })

    const tempForecastKeys = Object.keys(tempForecast);
    for (const key of tempForecastKeys) {
        const orderedTemp = tempForecast[key].sort((a, b) => a - b);
        const date = new Date(key);
        let weather: TWeatherDetail = {
            id: 0,
            main: "",
            description: "",
            icon: ""
        };
        if (date.getTime() < today.getTime()) {
            continue;
        }

        for (const forecast of forecastData.list) {
            if (forecast.dt_txt.includes(key)) {
                weather = forecast.weather[0];
                break;
            }
        }

        response.push({
            main: {
                temp_min: orderedTemp[0],
                temp_max: orderedTemp[orderedTemp.length - 1],
            },
            weekday: date.getDay() === today.getDay() ? 'Today' : date.toLocaleDateString('en-US', {weekday: 'long'}),
            day: key,
            weather
        })
    }

    return response;
}

export default normalizeForecastToWeather;
