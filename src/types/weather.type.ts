export type TWeather = {
    name: string;
    weather: Array<TWeatherDetail>,
    main: TWeatherMain,
}

export type TWeatherDetail = {
    id: number,
    main: string,
    description: string,
    icon: string
}

export type TWeatherMain = {
    temp?: number,
    feels_like?: number,
    temp_min: number,
    temp_max: number,
    pressure?: number,
    humidity?: number,
    sea_level?: number,
    grnd_level?: number
}
