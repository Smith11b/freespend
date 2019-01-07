import React from "react";

const AddFixedExp = function(props) {

  return (
    <div className="expense" id = "fixed">
      <h1 className="top" >Add Fixed Expense</h1>
      <img
        alt="a credit card being swiped"
        src="./img/icons8-insert-card-80.png"
      />
      <input value = {props.value} onChange = {props.onChange} id="expenses" />
      <button onClick = {props.thisClick}  id="plus-exp">+</button>
      <div>
          
      </div>
    </div>
  );
};

export default AddFixedExp;
