import React from "react";

const AddFixedExp = function(props) {
  return (
    <div className="expense" id="fixed">
      <h1 className="top">Add Fixed Expense</h1>
      <img
        alt="a credit card being swiped"
        src="./img/icons8-insert-card-80.png"
      />
      <input
        value={props.appState.fixedInput}
        onChange={props.onChange}
        id="expenses" placeholder = "amount"
      />
      <input
        value={props.appState.fixedDesc}
        onChange={props.descOnChange}
        id="expenses" placeholder = "description..."
      />
      <button onClick={props.onClick} id="plus-exp">
        +
      </button>
    </div>
  );
};

export default AddFixedExp;
