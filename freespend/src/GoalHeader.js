import React from "react";

const GoalHeader = function(props) {
  return (
    <div className="Goal-head" >
      <h1 className="top goal-h1">Goals</h1>
      <img
        alt="large home icon"
        src="./img/icons8-ledger-80.png"
      />
    </div>
  );
};

export default GoalHeader;