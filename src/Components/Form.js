import React, { useState } from 'react';

function SearchForm({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div className='form-div'>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
