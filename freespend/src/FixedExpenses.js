import React from "react";
import AddFixedExp from "./AddFixedExpense";
import ExpenseTotal from "./ExpenseTotal";
import FixedCard from "./FixedCard";
import InputWarningModal from "./InputWarningModal";

function FixedExp(props) {
  return (
    <div>
      <InputWarningModal show = {props.appState.showHomeWarning} toggleInputWarning = {props.toggleShowWarning} />
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
