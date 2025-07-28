import './App.css'
import WeatherIcon from "./components/WeatherIcon/index.tsx";
import DailyCard from "./components/DailyCard";
import {type ChangeEvent, useEffect, useState} from "react";
import type {TWeather} from "./types/weather.type.ts";
import {
    getCityGeolocation,
    getCurrentWeatherByGeolocation,
    getForecastByGeolocation
} from './services/openWeather.service.ts';
import normalizeForecastToWeather, {type TForecastResponse} from "./utils/normalizeForecast.util.ts";
import SearchIcon from "./icons/SearchIcon.tsx";
import CloseIcon from "./icons/CloseIcon.tsx";
import CloudIcon from "./icons/CloudIcon.tsx";

function App() {
    const [currentWeather, setCurrentWeather] = useState<TWeather | null>();
    const [forecastWeather, setForecastWeather] = useState<TForecastResponse[]>([]);
    const [cityName, setCityName] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [isSearchBarOpened, setIsSearchBarOpened] = useState<boolean>(false);

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    };

    const clearCitySearch = () => {
        setCityName('');
        setIsSearchBarOpened(false);
    }

    const openSearchBar = () => {
        setIsSearchBarOpened(isSearchBarOpened => !isSearchBarOpened);
    }

    const searchCity = () => {
        setLoading(true);
        getCityGeolocation(cityName).then((data) => {
            return getWeatherByGeolocation(data[0].lat, data[0].lon);
        });
    }

    const getWeatherByGeolocation = (lat: number, lon: number) => {
        getCurrentWeatherByGeolocation(lat, lon)
            .then(res => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
                if (isSearchBarOpened) {
                    clearCitySearch();
                }
                setCurrentWeather(res);
            });
        getForecastByGeolocation(lat, lon)
            .then(res => {
                setForecastWeather(normalizeForecastToWeather(res));
            })
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Success callback
                    getWeatherByGeolocation(position.coords.latitude, position.coords.longitude)
                },
                (error) => {
                    setCurrentWeather(null);
                    // Error callback
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.error("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            console.error("The request to get user location timed out.");
                            break;
                        default:
                            console.error("An unknown error occurred.");
                            break;
                    }
                },
                // Optional options object (e.g., enableHighAccuracy, timeout, maximumAge)
                {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
            );
        } else {
            setCurrentWeather(null);
        }
    }, [])
    return (
        <>
            <div className={`container flex flex-row`}>
                <div className={`flex flex-col justify-between search-bar ${isSearchBarOpened && 'show'}`}>
                    <div className="mx-3">
                        <h2>Search</h2>
                        <div className="flex">
                            <input
                                type="text"
                                className="search-input p-1"
                                placeholder="Search by city"
                                value={cityName}
                                onChange={handleCityChange}
                            />
                            <SearchIcon className="search-button" onClick={searchCity}/>
                        </div>
                    </div>
                    <div className="m-3">
                        <div className="medium disclaimer">
                            The information provided by this weather application is for general informational purposes
                            only. All weather data, forecasts, and alerts are obtained from third-party sources and are
                            provided "as is" without warranty of any kind, either express or implied. While we strive to
                            provide accurate and timely information, we make no representations or warranties of any
                            kind regarding the accuracy, completeness, reliability, or suitability of the weather data
                            presented.
                        </div>
                    </div>
                </div>
                <div className="main flex flex-col justify-between px-3 overflow-y-auto">
                    <div className="flex justify-between">
                        <h2>Weather</h2>
                        <div onClick={openSearchBar} className="search-icon">
                            {!isSearchBarOpened && <SearchIcon/>}
                            {isSearchBarOpened && <CloseIcon className="close-icon"/>}
                        </div>
                    </div>
                    {!loading && <>
                        <div className="current-weather flex flex-col align-center">
                            {currentWeather && currentWeather?.weather && <>
                                <WeatherIcon iconCode={currentWeather?.weather[0]?.icon} className="main-weather-icon"/>
                                <p className="city-name">{currentWeather?.name}</p>
                                <p className="temperature">{Math.round(currentWeather?.main?.temp || 0)}º</p>
                            </>}
                            {!currentWeather && <>
                                <h2>Search a city or allow browser location</h2>
                            </>}
                        </div>
                        <div className="daily-weather">
                            <h2><strong>5-days forecast</strong></h2>
                            <div className="daily-container flex justify-center">
                                {forecastWeather.map((forecast) => (
                                    <DailyCard weatherData={forecast}/>
                                ))}
                            </div>
                        </div>
                    </>}
                    {loading && <div className="loading-container"><CloudIcon className="loading-icon"/></div>}
                    <div className="mb-3 color-black">
                        <div className="medium disclaimer">
                            Users are advised to consult official government sources and exercise their own judgment
                            when making decisions based on weather conditions. The App and its developers are not liable
                            for any direct, indirect, incidental, or consequential damages or losses arising from the
                            use of or reliance on information provided by the App.
                            <br/>
                            By using this App, you agree to assume full responsibility for any decisions or actions
                            taken based on its content.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
