import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "./Classes";
import Revenue from "./Classes";
import { ExpenseItem, Fixed } from "./Classes";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import FixedExp from "./FixedExpenses";
import Transactions from "./Transactions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedExpenses: [], // an array of objects, amount properties will be added up to determine the fixed expenses
      freeSpend: 0, // After fixed expenses and income are summed this will be what's left over.
      transactions: [], // this will be an array of objects of the class Income, or Expense, they will contain the date, the amount the type, and the description of the transaction
      incomeInput: "",
      expenseInput: "",
      fixedInput: "",
      fixedDesc: "",
      fixedExpenseTotal: 0,
      goals: [],
      goalInput: "",
      goalDesc: "",
    };

    // Bindings for passed functions ---------------------
    this.incomeOnChangeHandler = this.incomeOnChangeHandler.bind(this);
    this.expenseOnChangeHandler = this.expenseOnChangeHandler.bind(this);
    this.incomeClickHandler = this.incomeClickHandler.bind(this);
    this.transactTotal = this.transactTotal.bind(this);
    this.calculateFreeSpend = this.calculateFreeSpend.bind(this);
    this.expenseClickHandler = this.expenseClickHandler.bind(this);
    this.fixedExpenseClickHandler = this.fixedExpenseClickHandler.bind(this);
    this.fixedExpenseOnChangeHandler = this.fixedExpenseOnChangeHandler.bind(this);
    this.addExpenseChangeHandler = this.addExpenseChangeHandler.bind(this);
    
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

  expenseClickHandler = () => {
    const exp = new ExpenseItem(this.state.expenseInput);
    console.log(exp);

    this.setState(prevState => {
      const transactions = [...prevState.transactions, exp];
      const expenseInput = "";
      const freeSpend = this.calculateFreeSpend(transactions);
      return {
        transactions,
        expenseInput,
        freeSpend
      };
    });
    console.log(this.state.transactions);
  };

  // This function goes through the array of fixed expenses which are negative intergers, then ads them together to get the
  //change the fixed expenses amount in state. I'll need to refactor it (it's redundant) and it will also need to update state

  calculateFixedExpenses = transactions => {
    let result = 0;
    for (let i = 0; i < transactions.length; i++) {
      result += transactions[i].amount;
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

  calculateFreeSpend = (transactions, expenseTotal = this.state.fixedExpenseTotal) => {
    return this.transactTotal(transactions) + expenseTotal;
  };

  // This handles the usesr input on the income component. Allows it to update state so the data from the user can be used in other
  // places in the application

  incomeOnChangeHandler = e => {
    this.setState({ incomeInput: e.target.value });
  };

  expenseOnChangeHandler = e => {
    this.setState({ expenseInput: e.target.value });
  };

  fixedExpenseOnChangeHandler = e =>
    this.setState({ fixedInput: e.target.value });

  // I've broken the render function down into it's components. Total currently has placeholder values but I'll need to refactor those
  // to update when state does.

  fixedExpenseClickHandler = () => {
    const fExp = new Fixed(this.state.fixedInput, this.state.fixedDesc);
    this.setState(prevState => {
      const expenses = [...prevState.fixedExpenses, fExp];
      const fixedInput = "";
      const fixedDesc = "";
      const fixedExpenseTotal = this.calculateFixedExpenses(expenses);
      const freeSpend = this.calculateFreeSpend(this.state.transactions, fixedExpenseTotal)
      return {
        fixedExpenses: expenses,
        fixedInput,
        fixedDesc,
        fixedExpenseTotal,
        freeSpend
      };
    });
  };

  addExpenseChangeHandler = e => {
    this.setState({fixedDesc : e.target.value})
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  appState={this.state}
                  incomeHandle={this.incomeClickHandler}
                  incomeChange={this.incomeOnChangeHandler}
                  expenseHandle={this.expenseClickHandler}
                  expenseChange={this.expenseOnChangeHandler}
                />
              )}
            />
            <Route
              path="/expenses"
              render={props => (
                <FixedExp
                  {...props}
                  appState={this.state}
                  onClick={this.fixedExpenseClickHandler}
                  onChange={this.fixedExpenseOnChangeHandler}
                  descOnChange = {this.addExpenseChangeHandler}
                />
              )}
            />
            <Route path="/transactions" render = {props => (<Transactions {...props} transactions = {this.state.transactions}/>)} />
            <Route path="/goals" />
            <Route path="/send-money" />
          </Switch>
        </div>
        <Nav />
      </div>
    );
  }
}

export default App;
