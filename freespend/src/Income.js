import React from "react";

const Income = function(props) {
  console.log(props);
  return (
    <div className="income">
      <h1 className="top">Income</h1>
      <img alt="hand holding money" src="./img/icons8-cash-in-hand-80.png" />
      <input value={props.value} onChange={props.onChange} id="income" />
      <button type="button" onClick={props.onClick} id="plus">
        +
      </button>
    </div>
  );
};

export default Income;
