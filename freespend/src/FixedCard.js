import React from "react";

function FixedCard(props) {
  return (
    <div className = "expense-card">
      <h1 className = "expense-total-h1">
        {props.fixedName}
        <span className = "colon">:</span>
      </h1>
      <img className = "edit-icon" alt = "edit icon" src="https://img.icons8.com/material/24/000000/edit.png"></img>
      <img alt = "delete icon" className = "edit-icon" src="https://img.icons8.com/material-outlined/24/000000/close-window.png"></img>
      <h1 className = "expense-total-amount light-orange">${props.fixedCost}</h1>
    </div>
  );
}

export default FixedCard;
