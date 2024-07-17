import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div className="flex items-center justify-center mt-4">
            <label htmlFor="dark-mode-toggle" className="mr-2 text-lg text-gray-700 dark:text-gray-300">Dark Mode</label>
            <input 
                type="checkbox" 
                id="dark-mode-toggle" 
                className="toggle-checkbox hidden"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <label htmlFor="dark-mode-toggle" className="toggle-label block w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer relative">
                <span className="toggle-circle absolute left-1 top-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full transition-transform duration-200 ease-in-out transform"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;