import React from 'react';


const Expense = function(props){
    return (<div className = "expense">
        <h1 className = "top">Expense</h1><img alt = "a credit card being swiped" src = "./img/icons8-insert-card-80.png"></img>
        <input id = "expenses"></input>
        <button id = "plus-exp">+</button>
    </div>)
}


export default Expense;