import React from "react";
import Income from "./Income";
import Expense from "./Expenses";
import Total from "./Total";
import { withModalToggle } from "./ModalProvider";
import IncomeModal from "./IncomeModal";
import ExpenseModal from "./ExpenseModal";

function Home({ toggleModal, ...props }) {
  return (
    <div>
      <IncomeModal
        addIncomeDesc={props.addIncomeDesc}
        descChange={props.descChange}
        income={props.appState.incomeDesc}
        show={props.appState.showModal}
        clickCatch={toggleModal}
      />
      <ExpenseModal
        addExpenseDesc={props.addExpenseDesc}
        expenseDescChange={props.expenseDescChange}
        toggleShowExpenseModal={props.toggleShowExpenseModal}
        expense={props.appState.expenseDesc}
        show={props.appState.showExpenseModal}
      />

      <Income
        value={props.appState.incomeInput}
        onChange={props.incomeChange}
        onClick={props.incomeHandle}
      />
      <Expense
        value={props.appState.expenseInput}
        onChange={props.expenseChange}
        thisClick={props.expenseHandle}
      />

      <Total
        fixedExpense="$2450"
        spent="$249"
        freeSpend={props.appState.freeSpend}
      />
    </div>
  );
}

export default withModalToggle(Home);
