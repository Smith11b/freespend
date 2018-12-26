import React from 'react';


const Total = function(props){
    return (<div className = "freespend-total">
        <h3>Fixed Expenses:</h3><h1>{props.fixedExpense}</h1>
        <h3>FreeSpend Spent:</h3><h1>{props.spent}</h1>
        <h1>FreeSpend:</h1><h1>{props.freeSpend}</h1>
    </div>)
}


export default Total;