import React from 'react'

function ExpenseTotal(props) {
    return (
        <div className = "expense-list">
            <h1 className = "expense-total-h1">Fixed Expenses<span className = "colon">:</span></h1>
            <h1 className = "expense-total-amount">${props.total}</h1>
            
        </div>
    )
}

export default ExpenseTotal
