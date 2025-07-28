import type {TWeatherDetail, TWeatherMain} from "./weather.type.ts";

export type TForecast = {
    "list": {
        "dt": number,
        "main": TWeatherMain,
        "weather": Array<TWeatherDetail>,
        "dt_txt": string,
    }[],
}

export type TForecastResponse = {
    "main": TWeatherMain,
    "weather": TWeatherDetail,
    "weekday": string,
    "day": string,
}
