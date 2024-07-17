import React from 'react';

const WeatherDisplay = ({ weather }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return (
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-4 w-full max-w-md mx-auto transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-3">
            <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl p-8 text-center z-10 relative transition duration-500 ease-in-out">
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{weather.name}</h2>
                <img src={iconUrl} alt={weather.weather[0].description} className="mx-auto mb-4 animate-bounce" />
                <p className="text-xl mb-4 capitalize text-gray-700 dark:text-gray-300">{weather.weather[0].description}</p>
                <div className="flex justify-around text-gray-700 dark:text-gray-300">
                    <p className="text-2xl mb-2 flex items-center">
                        <i className="wi wi-thermometer mr-2"></i> {weather.main.temp}°C
                    </p>
                    <p className="text-xl mb-2 flex items-center">
                        <i className="wi wi-humidity mr-2"></i> {weather.main.humidity}%
                    </p>
                    <p className="text-xl flex items-center">
                        <i className="wi wi-strong-wind mr-2"></i> {weather.wind.speed} m/s
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
