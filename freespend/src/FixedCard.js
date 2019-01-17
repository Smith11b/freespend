import React from "react";

function FixedCard(props) {
  return (
    <div className = "expense-card">
      <h1 className = "expense-total-h1">
        {props.fixedName}
        <span className = "colon">:</span>
      </h1>
      <h1 className = "expense-total-amount light-orange">${props.fixedCost}</h1>
    </div>
  );
}

export default FixedCard;
