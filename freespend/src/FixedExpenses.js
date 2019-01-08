import React from "react";
import AddFixedExp from "./AddFixedExpense";


function FixedExp(props) {
  return <div>
      <AddFixedExp appState = {props.appState} onClick = {props.onClick} onChange = {props.onChange}/>
      <div>

      </div>
      </div>
}

export default FixedExp;
