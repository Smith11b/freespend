import React, { Component } from "react";
import Header from "./Header";
import Income from "./Income";
import Expense from "./Expenses";
import "./Classes";
import Total from "./Total";
import Nav from "./Nav";
import Revenue from "./Classes";
import ExpenseItem from "./Classes";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedExpenses: [], // an array of objects, amount properties will be added up to determine the fixed expenses
      freeSpend: 0, // After fixed expenses and income are summed this will be what's left over.
      transactions: [], // this will be an array of objects of the class Income, or Expense, they will contain the date, the amount the type, and the description of the transaction
      incomeInput: "",
      expenseInput: "",
      fixedExpenseTotal: 0
    };

    // Bindings for passed functions ---------------------
    this.incomeOnChangeHandler = this.incomeOnChangeHandler.bind(this);
    this.incomeClickHandler = this.incomeClickHandler.bind(this);
    this.transactTotal = this.transactTotal.bind(this);
    this.calculateFreeSpend = this.calculateFreeSpend.bind(this);
  }

  // This function adds a new revenue transaction to the transactions array in state, then calls calculate freespend which also
  // updates state. I'll need to refactor this. The console log was for debuggin purposes

  incomeClickHandler = () => {
    const rev = new Revenue(this.state.incomeInput);
    this.setState(prevState => {
      const transactions = [...prevState.transactions, rev];
      const incomeInput = "";
      const freeSpend = this.calculateFreeSpend(transactions);
      return {
        transactions,
        incomeInput,
        freeSpend
      };
    });
    console.log(this.state.transactions);
  };

  // This function goes through the array of fixed expenses which are negative intergers, then ads them together to get the
  //change the fixed expenses amount in state. I'll need to refactor it (it's redundant) and it will also need to update state

  calulateFixedExpenses = () => {
    let result = 0;
    for (let i = 0; i < this.state.fixedExpenses.length; i++) {
      result += this.state.fixedExpenses[i].amount;
    }
    return result;
  };

  // this function does the same thing, but with the transactions array. I'm writing it hodgpodge right now because of time
  // constraints, but will refactor these last two functions into  a single one.

  transactTotal = transactions => {
    let result = 0;
    for (let i = 0; i < transactions.length; i++) {
      result += transactions[i].amount;
    }
    return result;
  };

  //this function updates freespend by taking the transaction total (positive or negative depending on how the user has transacted
  // and ads it to the fixed expenses totaled in state. It does this while updating the freespend property of state so it can be displayed
  // to the user.

  calculateFreeSpend = transactions => {
    return this.transactTotal(transactions) + this.state.fixedExpenseTotal;
  };

  // This handles the usesr input on the income component. Allows it to update state so the data from the user can be used in other
  // places in the application

  incomeOnChangeHandler = e => {
    this.setState({ incomeInput: e.target.value });
  };

  // I've broken the render function down into it's components. Total currently has placeholder values but I'll need to refactor those
  // to update when state does.

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Income
            value={this.state.incomeInput}
            onClick={this.incomeClickHandler}
            onChange={this.incomeOnChangeHandler}
          />
          <Expense />
          <Total
            fixedExpense="$3248"
            spent="$249"
            freeSpend={this.state.freeSpend}
          />
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
