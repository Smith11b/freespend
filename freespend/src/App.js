import React, { Component } from 'react';
import Header from "./Header";
import Income from './Income';
import Expense from './Expenses';
import Total from './Total';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedExpense : [],
      freeSpend : 0,
      transactions : []
    }
  }
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
