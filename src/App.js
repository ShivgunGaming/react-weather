import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Error from './components/Error';
import { fetchWeather } from './services/weatherService';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeather(city);
            setWeather(data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-gray-100 relative z-0">
            <header className="w-full py-6 mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl rounded-lg animate-gradientShift">
                <h1 className="text-6xl font-bold text-center">Weather App</h1>
            </header>
            <main className="flex flex-col items-center flex-grow w-full">
                <SearchBar onSearch={handleSearch} />
                {loading && (
                    <div className="spinner"></div>
                )}
                {error && <Error message={error} />}
                {weather && <WeatherDisplay weather={weather} />}
            </main>
            <footer className="w-full py-4 mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center rounded-lg shadow-2xl animate-gradientShift">
                <p className="text-xl text-gray-200">Weather App © 2024</p>
            </footer>
        </div>
    );
};

export default App;
