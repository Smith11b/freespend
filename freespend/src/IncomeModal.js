import React from "react";

function IncomeModal(props) {
  return (
    <div
      style={!props.show ? { display: "none" } : { display: "block" }}
      className="modal-overlay" 
    >
      <div className="modal-box">
        <h1>What was it?</h1>
        <input
          className="modal-input"
          value={props.income}
          onChange={props.descChange}
        />
        <button>Add it!</button>
      </div>
    </div>
  );
}

export default IncomeModal;
