import React from "react";
import AddFixedExp from "./AddFixedExpense";
import ExpenseTotal from "./ExpenseTotal";
import FixedCard from "./FixedCard";

function FixedExp(props) {
  return (
    <div>
      <AddFixedExp
        appState={props.appState}
        onClick={props.onClick}
        onChange={props.onChange}
        descOnChange={props.descOnChange}
      />
      <div className="expense-list">
        {props.appState.fixedExpenses.length === 0 ? (
          <h1 className="warning fixed-warning">Your fixed expenses will go here...</h1>
        ) : (
          props.appState.fixedExpenses.map(expense => {
            return (
              <FixedCard
                fixedName={expense.description}
                fixedCost={expense.amount}
              />
            );
          })
        )}
      </div>
      <ExpenseTotal total={props.appState.fixedExpenseTotal} />
    </div>
  );
}

export default FixedExp;
