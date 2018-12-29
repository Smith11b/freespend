import React, { Component } from 'react';
import Header from "./Header";
import Income from './Income';
import Expense from './Expenses';
import './Classes'
import Total from './Total';
import Nav from './Nav';
import Revenue from './Classes';
import ExpenseItem from './Classes'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedExpense : [], // an array of objects, amount properties will be added up to determine the fixed expenses
      freeSpend : 0,     // After fixed expenses and income are summed this will be what's left over.
      transactions : [], // this will be an array of objects of the class Income, or Expense, they will contain the date, the amount the type, and the description of the transaction
      incomeInput : '',
      expenseInput : '',
      fixedExpenses : 0
       }
       this.incomeOnChangeHandler = this.incomeOnChangeHandler.bind(this)   
       this.incomeClickHandler = this.incomeClickHandler.bind(this)
       this.transactTotal = this.transactTotal.bind(this)   
       this.calculateFreeSpend = this.calculateFreeSpend.bind(this)            
  }
incomeClickHandler = () => {
   const rev = new Revenue(this.state.incomeInput);
   this.setState( state =>{
    const transactions = [...state.transactions, rev];
    const incomeInput = '';
    return {
      transactions,
      incomeInput
    }
  })
  this.calculateFreeSpend();
  console.log(this.state.transactions);
  }

  calulateFixedExpenses = () => {
    let result = 0
    for(let i = 0; i < this.state.fixedExpenses.length; i++) {
      result += this.state.fixedExpenses[i].amount;
    }
    return result;

  }

  transactTotal = () => {
    let result = 0
    for(let i = 0; i < this.state.transactions.length; i++) {
      result += this.state.transactions[i].amount;
    }
    return result;
}

  calculateFreeSpend = () => {
    let total = this.transactTotal()
    let expense = this.state.fixedExpense
   this.setState({freeSpend : total + expense})

  }

  incomeOnChangeHandler = (e) => {
    this.setState({incomeInput : e.target.value});
  }
  render() {
    return (
      <div>
        <Header />
        <Income value = {this.state.incomeInput} onClick = {this.incomeClickHandler} onChange = {this.incomeOnChangeHandler} />
        <Expense />
        <Total fixedExpense = '$3248' spent = "$249" freeSpend = {this.state.freeSpend}/>
        <Nav /> 
      </div>
    );
  }
}

export default App;
