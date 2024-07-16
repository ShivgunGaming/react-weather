import React from 'react';

const WeatherDisplay = ({ weather }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return (
        <div className="bg-white bg-opacity-70 shadow-md rounded p-6 m-4 w-full max-w-md mx-auto text-center transition duration-200 ease-in-out transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
            <img src={iconUrl} alt={weather.weather[0].description} className="mx-auto" />
            <p className="text-xl mb-2 capitalize">{weather.weather[0].description}</p>
            <p className="text-2xl mb-2">Temperature: {weather.main.temp}°C</p>
            <p className="text-xl mb-2">Humidity: {weather.main.humidity}%</p>
            <p className="text-xl">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherDisplay;
