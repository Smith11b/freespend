import React, { Component } from 'react';
import Header from "./Header";
import Income from './Income';
import Expense from './Expenses';
import Total from './Total';
import Nav from './Nav';
import Revenue from './Classes';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedExpense : [], // an array of objects, amount properties will be added up to determine the fixed expenses
      freeSpend : 0,     // After fixed expenses and income are summed this will be what's left over.
      transactions : [] // this will be an array of objects of the class Income, or Expense, they will contain the
    }                   // date, the amount the type, and the description of the transaction
  }
incomeClickHandler = (e) => {
    let income = document.getElementById("income");
    let description = document.getElementById("description")

    if (income.value === '' || description.value === ''){
      //Run "you forgot something" function.
    } else {
    const expense = new Revenue(income, description);
    this.state.transactions.push(expense);
    console.log(this.state.transactions);
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Income addIncome = {this.incomeClickHandler} />
        <Expense />
        <Total fixedExpense = '$3248' spent = "$249" freeSpend = "$380"/>
        <Nav /> 
      </div>
    );
  }
}

export default App;
