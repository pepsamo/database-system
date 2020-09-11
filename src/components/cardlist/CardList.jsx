import React, { useState, useEffect } from 'react';
import { CardOverview } from '../card/Card.component';
import { useSelector } from 'react-redux';
import { CardDeck } from 'reactstrap';

const CardList = () => {
    const [ usersArray, setUsers ] = useState([]);
    const store = useSelector((store) => store);
    useEffect(() => {
            if (store.searchResult.length > 0) {
                const result = usersArray.filter(user => user.lastname.toLowerCase().includes(store.searchResult.toLowerCase()));
                setUsers(result);
            } else {
                setUsers(store.users);
            }
        }, [store]
    );
    const UserCard = usersArray.map((user) => {
        return (<CardOverview 
            user= {user} 
            key= {user.id} />);
    });
    return (
        <CardDeck>
            { usersArray.length ===0 ? <h2>Nessun risultato</h2> : UserCard }
        </CardDeck>);
};

export default CardList;