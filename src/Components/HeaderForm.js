import React, { useState, useEffect } from 'react';

export default function FormComponent() {

  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState([]);

  const dynamicOptions = ['Option 1', 'Option 2', 'Option 3'];

  useEffect(() => {
    setOptions(dynamicOptions);
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };



  return (
    <div>
        <div>

          <select value={selectedOption} onChange={handleSelectChange} >
            <option value="" disabled></option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input type="text" placeholder='search' value={searchText} onChange={handleSearchChange} />
        </div>

    </div>
  );
};

