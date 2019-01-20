import React, { Component } from "react";

const { Consumer, Provider } = React.createContext();

export default class BudgetProvider extends Component {
  constructor() {
    super();
    this.state = {
      monthlyTotal: 0,
      transactions: []
    };
  }

  addTransaction(transaction) {
    // transaction object contains: amt spent, category
    this.setState(ps => ({
      transactions: [...ps.transactions, transaction]
    }));
  }

  render() {
    const value = {
      ...this.state,
      addTransaction: this.addTransaction
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export const withBudgetContext = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
