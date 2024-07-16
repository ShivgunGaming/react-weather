import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="bg-red-600 border border-red-800 text-white px-4 py-3 rounded relative m-4 w-full max-w-md mx-auto text-center shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default Error;
