import React from "react";

function GoalModal(props) {
  return (
    <div
      style={!props.show ? { display: "none" } : { display: "block" }}
      className="modal-overlay"
    >
      <div className="modal-box">
        <h1>What was it?</h1>
        <input
          className="modal-input"
          value={props.amount}
          onChange={props.amountChange}
        />
        <input
          className="modal-input"
          value={props.desc}
          onChange={props.descChange}
        />
        <button onClick={props.addGoal}>Add it!</button>
      </div>
    </div>
  );
}

export default GoalModal;