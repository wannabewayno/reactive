import React, { useState, useEffect } from 'react';
import './style.css';
import magnifyingGlass from './magnifying-glass.png';

const SearchBar = ({ name, handleliftup, backgroundColor }) => {
    
    if (!handleliftup){
        handleliftup = () => console.warn(
            "SearchBar is not sharing it's state with the container!",
            "Can't use a form component not wrapped by a FormContainer.",
            "Consider wrapping SearchBar in a FormContainer.")
    }

    const [searchValue, setSearchValue ] = useState('');

    const handleSearchInput = event => {
        const value = event.target.value
        setSearchValue(value);
    }

    useEffect(()=>{
        // makes searchValue available to it's container
        handleliftup({stateName:name.id,value:searchValue})
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => handleliftup({stateName:name.id,toDelete:true})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue])

    return(
        <div className='search-bar'>
            {name.toDisplay?<label>{name.display}</label>:null}
            <input 
                type='text'
                value={searchValue}
                placeholder="search..."
                onChange={event => handleSearchInput(event)}
                style={{ border: `1px solid ${backgroundColor}`}}
            />
            <div style={{ backgroundColor }}>
                <img src={magnifyingGlass} alt="search-icon"/>
            </div>
        </div>
    );
}

export default SearchBar;