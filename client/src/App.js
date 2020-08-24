import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionsList } from './components/TransactionsList';
import { AddTransaction } from './components/AddTransaction';
import Container from 'react-bootstrap/Container';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container>
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </Container>

    </GlobalProvider>
  );
}

export default App;
