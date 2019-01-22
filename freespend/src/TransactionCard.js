import React from "react";

function TransactionCard(props) {
    const style = {
  color : props.amount > 0 ? "#4cefa4" : "#ffa50a"
    };
    const plus = props.amount > 0 ? "+" : "";
  return (
    <div className="transaction-card">
      <h1 className="transaction-entry">{`${props.description} :`}</h1>
      <img
        className="edit-icon"
        alt="edit icon"
        src="https://img.icons8.com/material/24/000000/edit.png"
      />
      <img
        alt="delete icon"
        className="edit-icon delete"
        src="https://img.icons8.com/material-outlined/24/000000/close-window.png"
      />
      <h1 style = {style} className="transaction-amount">{`${plus}$${props.amount}`}</h1>
    </div>
  );
}

export default TransactionCard;
