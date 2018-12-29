import React from 'react';


const Total = function(props){
    return (<div className = "freespend-total">
        <div><h3 className = "total-label">Fixed Expenses:</h3><h1 className = "total-amount">{props.fixedExpense}</h1></div>
        <div><h3 className = "total-label">FreeSpend Spent:</h3><h1 className = "total-amount">{props.spent}</h1></div>
        <div><h1 className = "total-label" id = "spend-label">FreeSpend:</h1><h1 className = "total-amount" id = "spend">${props.freeSpend}</h1></div>
    </div>)
}


export default Total;