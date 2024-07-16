import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
        setCity('');
    };

    return (
        <div className="flex justify-center items-center p-4 w-full max-w-md mx-auto bg-white rounded-full shadow-lg mt-4 transition-transform duration-200 ease-in-out transform hover:scale-105">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
                className="p-3 border border-gray-300 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                style={{ flexGrow: 1 }}
            />
            <button 
                onClick={handleSearch} 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-r-full hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                style={{ flexShrink: 0 }}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
