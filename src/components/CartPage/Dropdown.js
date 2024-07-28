import React, { useState, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ storageKey }) => {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        // Retrieve the stored selected option from localStorage on component mount
        const storedOption = localStorage.getItem(storageKey);
        if (storedOption) {
            setSelectedOption(storedOption);
        }
    }, [storageKey]);

    const handleOptionChange = (event) => {
        const newOption = event.target.value;
        setSelectedOption(newOption);
        // Store the selected option in localStorage
        localStorage.setItem(storageKey, newOption);
    };

    return (
        <div className="dropdown">
            
            <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="dropdown-toggle"
            >
                <option value="" disabled> Size</option>
                <option value="option1">Size 1</option>
                <option value="option2">Size 2</option>
                <option value="option3">Size 3</option>
            </select>
        </div>
    );
};

export default Dropdown;
