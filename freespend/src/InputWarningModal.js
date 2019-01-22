import React from "react";

function InputWarningModal(props) {
  return (
    <div
      style={!props.show ? { display: "none" } : { display: "block" }}
      className="modal-overlay"
    >
      <div className="modal-box warning-modal">
        <h1>You entered that incorrectly, try again</h1>
        <button onClick={props.toggleInputWarning}>Ok</button>
      </div>
    </div>
  );
}

export default InputWarningModal;
