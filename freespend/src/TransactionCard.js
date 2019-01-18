import React from 'react'

function TransactionCard(props) {
    return (
        <div className = "transaction-card">
            <h1 className = "transaction-entry">{`${props.description} :   $${props.amount}`}</h1>
        </div>
    )
}

export default TransactionCard;
