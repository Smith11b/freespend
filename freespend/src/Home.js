import React from "react";
import Income from "./Income";
import Expense from "./Expenses";
import Total from "./Total";
import ModalBoxContainer from "./ModalBox";
import {Consumer} from "./index";

function Home(props) {
  return (
    <div>
      
        <Consumer>
      {value => (<ModalBoxContainer  {...value} {...props}/>)}
      </Consumer>
      <Income
        value={props.appState.incomeInput}
        onChange={props.incomeChange}
        onClick={props.incomeHandle}
      />
      <Expense
        value={props.appState.expenseInput}
        onChange={props.expenseChange}
        thisClick={props.expenseHandle}
      />
      <Total
        fixedExpense="$2450"
        spent="$249"
        freeSpend={props.appState.freeSpend}
      />
      </div>
    
  );
}

export default Home;
