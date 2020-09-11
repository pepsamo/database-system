import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findUser } from '../../reducers/actions';

const Searchbar = (props) => {
    const [ name, searchName ] = useState('');
    const dispatch = useDispatch();
    const searchUser = (e) => {
        const result = e.target.value;
        searchName(result);
        dispatch(findUser(result));
    };
    return (
        <input 
            type="text" 
            placeholder= "Cerca un utente..."
            onChange= {searchUser}
            value= {name} />
    );
};

export default Searchbar;