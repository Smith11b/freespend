import React from 'react'

function TransactionCard(props) {
    return (
        <div className = "transaction-card">
            <h1 className = "transaction-entry">{`${props.description} :`}</h1><img className = "edit-icon" alt = "edit icon" src="https://img.icons8.com/material/24/000000/edit.png"></img><img alt = "delete icon" className = "edit-icon" src="https://img.icons8.com/material-outlined/24/000000/close-window.png"></img><h1 className = "transaction-amount">{`$${props.amount}`}</h1>
        </div>
    )
}

export default TransactionCard;
