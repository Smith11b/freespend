import React from "react";

function ExpenseModal(props) {
  return (
    <div
      style={!props.show ? { display: "none" } : { display: "block" }}
      className="modal-overlay"
    >
      <div className="modal-box">
        <h1>What was it?</h1>
        <input
          className="modal-input"
          value={props.expense}
          onChange={props.expenseDescChange}
        />
        <button onClick={props.addExpenseDesc}>Add it!</button>
      </div>
    </div>
  );
}

export default ExpenseModal;
