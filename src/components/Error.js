import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4 w-full max-w-md mx-auto">
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default Error;
