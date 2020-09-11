import React from 'react';
import Header from './components/header/Header.component';
import Main from './components/main/main-component';
import Searchbar from './components/searchbar/Searchbar.component';
import { CardsContainer } from './components/cards-container/CardsContainer.component';
import { OrderMenu } from './components/order-menu/OrderMenu';
import { useDispatch } from 'react-redux';
import useFetch from './effects/fetch-effect.effect';
import CardList from './components/cardlist/CardList';

const App = () => {
  const dispatch = useDispatch();
  const users = useFetch('http://localhost:3000/users', dispatch);
  return (
    <>
      <Header />
      <Main>
        <Searchbar />
        <OrderMenu />
        <CardsContainer>
          <CardList users = {users} />
        </CardsContainer>
      </Main>
    </>
  );
};
export default App;
