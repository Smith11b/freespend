import React from "react";

function FixedCard(props) {
  return (
    <div>
      <h1 className = "expense-total-h1">
        {props.fixedName}
        <span className = "colon">:</span>
      </h1>
      <h1 className = "expense-total-amount">${props.fixedCost}</h1>
    </div>
  );
}

export default FixedCard;
