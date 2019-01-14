import React from "react";

function FixedCard(props) {
  return (
    <div>
      <h1>
        {props.fixedName}
        <span>:</span>
      </h1>
      <h1>${props.fixedCost}</h1>
    </div>
  );
}

export default FixedCard;
