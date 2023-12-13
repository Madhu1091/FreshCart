import React, { useEffect, useState } from "react";
import cart from '../Images/cart.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function All() {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState([]);
    const [showForm, setShowForm] = useState(false);

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

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2">
                    <div className="cart">
                        <img src={cart} alt="cartImage" />
                        <h4 className="freshcart">FreshCart</h4>
                    </div>
                </div>

                {/* Render the form for large screens */}
                <div className={`col-12 col-md-8 d-none d-md-flex`}>
                    <div className="test">
                        <div>
                            <select value={selectedOption} onChange={handleSelectChange} className="largeScreensSelect">
                                <option value="" disabled></option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <input className="largeScreenSearch" type="text" placeholder='search' value={searchText} onChange={handleSearchChange} />
                        </div>
                    </div>
                </div>

                {showForm && (
                    <div className={`col-12 col-md-8 ${showForm ? 'd-md-none' : ''} form-container`}>
                        <div className="col-12 col-md-2 smallandmedium">
                            <div className="cart">
                                <img src={cart} alt="cartImage" />
                                <h4 className="freshcart">FreshCart</h4>
                            </div>
                            <div> <i className="bi bi-x into" onClick={closeForm}></i></div>
                        </div>
                        {/* Render the form for small screens */}
                        <div className="form">
                            {/* Hide the select and input for small screens */}
                            <div className="d-md-none">
                                <select value={selectedOption} onChange={handleSelectChange}>
                                    <option value="" disabled></option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-md-none">
                                <input type="text" placeholder='search' value={searchText} onChange={handleSearchChange} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Render icons for large screens */}
                <div className={`col-12 col-md-2 d-none d-md-flex`}>
                    <div className="threeIcons">
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-person"></i>
                        <i className="bi bi-bag"></i>
                    </div>
                </div>

                {/* Render the menu icon for small screens */}
                <div className={`col-12 col-md-2 ${showForm ? 'd-md-none' : ''}`}>
                    <div className="threeIcons">
                        <span className="bi bi-list" onClick={toggleForm}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
