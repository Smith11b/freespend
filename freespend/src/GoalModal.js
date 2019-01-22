import React from "react";

function GoalModal(props) {
  return (
    <div
      style={!props.show ? { display: "none" } : { display: "block" }}
      className="modal-overlay"
    >
      <div className="modal-box goal-modal">
        <h1>New Goal Setup</h1>
        <input
          className="modal-input"
          value={props.amount}
          onChange={props.amountChange}
          placeholder = "Goal Amount"
        />
        <input
          className="modal-input"
          value={props.desc}
          onChange={props.descChange}
          placeholder = "Goal Description"
        />
        <button onClick={props.addGoal}>Add it!</button>
      </div>
    </div>
  );
}

export default GoalModal;