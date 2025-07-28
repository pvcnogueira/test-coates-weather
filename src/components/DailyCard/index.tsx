import './index.css'
import WeatherIcon from "../WeatherIcon";

interface WeatherProps {
    weatherData: {
        main: {
            temp?: number,
            feels_like?: number,
            temp_min: number,
            temp_max: number,
            pressure?: number,
            humidity?: number,
            sea_level?: number,
            grnd_level?: number
        },
        weather: {
            id?: number,
            main?: string,
            description?: string,
            icon: string
        },
        weekday: string,
    }
}

const DailyCard = ({weatherData}: WeatherProps) => {
    return (
        <div className="daily-card flex flex-col align-center justify-between">
            <h2>{weatherData.weekday}</h2>
            <WeatherIcon iconCode={weatherData?.weather.icon} className="card-weather-icon"/>
            <div className="flex flex-row ju temperature-container">
                <p className="temperature l">
                    L
                    <br/>
                    {Math.round(weatherData?.main?.temp_min)}º
                </p>
                <p className="temperature r">
                    H
                    <br/>
                    {Math.round(weatherData?.main?.temp_max)}º
                </p>
            </div>
        </div>
    );
}

export default DailyCard;
