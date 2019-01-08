import React from 'react'

function ExpenseTotal(props) {
    return (
        <div>
            <h1>Fixed Expenses<span>:</span></h1>
            <h1>${props.total}</h1>
            
        </div>
    )
}

export default ExpenseTotal
