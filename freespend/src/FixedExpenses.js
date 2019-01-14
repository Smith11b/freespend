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
        descOnChange = {props.descOnChange}
      />
      <div>
          {props.appState.fixedExpenses.map(expense => {
              return <FixedCard fixedName = {expense.description} fixedCost = {expense.amount} />
          })}
      </div>
      <ExpenseTotal total = {props.appState.fixedExpenseTotal}/>
    </div>
  );
}

export default FixedExp;
