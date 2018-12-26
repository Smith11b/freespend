import React from 'react';


const Expense = function(props){
    return (<div>
        <h1 className = "top">Expense</h1>
        <input id = "expenses"></input>
        <button id = "plus-exp">+</button>
    </div>)
}


export default Expense;