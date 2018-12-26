import React, { Component } from 'react';
import Header from "./Header";
import Income from './Income';
import Expense from './Expenses';
import Total from './Total';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Income />
        <Expense />
        <Total fixedExpense = '$3248' spent = "$249" freeSpend = "$380"/>
      </div>
    );
  }
}

export default App;
