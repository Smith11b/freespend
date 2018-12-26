import React, { Component } from 'react';
import Header from "./Header";
import Income from './Income';
import Expense from './Expenses';
import Total from './Total';

function Revenue(income, description){ //this class passes two input objects, the income and description inputs
  this.amount = income.value;          // then it stores the values in properties on a new revenew. It's called in the incomeClickHandler
  this.description = description.value;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedExpense : [], // an array of objects, amount properties will be added up to determine the fixed expenses
      freeSpend : 0,     // After fixed expenses and income are summed this will be what's left over.
      transactions : [] // this will be an array of objects of the class Income, or Expense, they will contain the
    }                   // date, the amount the type, and the description of the transaction
  }

  

  incomeClickHandler = () => {
    let income = document.getElementById("income");
    let description = document.getElementById("description")

    if (income.value === '' || description.value === ''){
      //Run "you forgot something" function.
    } else {
    const expense = new Revenue(income, description);
    this.state.transactions.push(expense);
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
