import type {TWeather} from "../types/weather.type.ts";
import type {TCity} from "../types/city.type.ts";
import type {TForecast} from "../types/forecast.type.ts";

const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

/**
 * Get weather data based on lat and lon
 * @param lat
 * @param lon
 */
export const getCurrentWeatherByGeolocation = async (lat: number, lon: number): Promise<TWeather> => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&exclude=minutely,hourly,alerts`
    );
    return res.json();
}

/**
 * Get forecast data based on lat and lon
 * @param lat
 * @param lon
 */
export const getForecastByGeolocation = async (lat: number, lon: number): Promise<TForecast> => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}`
    );
    return res.json();
}

/**
 * Get city lat and lon base on city name
 * @param city
 */
export const getCityGeolocation = async (city: string): Promise<TCity[]> => {
    const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${OPENWEATHER_KEY}&exclude=current,minutely,hourly,alerts`
    );
    return res.json();
}
