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
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-5xl font-bold text-white mb-6">Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p className="text-xl text-white">Loading...</p>}
            {error && <Error message={error} />}
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
};

export default App;
