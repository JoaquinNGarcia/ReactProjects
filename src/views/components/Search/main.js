import React from 'react';

const Search = ({
    onSearch
}) => {
    
    const onChangeEvent = (e) => {
        const { target: { value } } = e;
        onSearch(value);
    };

    return (
        <input
            onChange={ onChangeEvent }
            placeholder='Ingrese su busqueda'
            type="text"
        />
    );
};

Search.propTypes = {

};

export default Search;