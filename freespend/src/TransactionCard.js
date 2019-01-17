import React from 'react'

function TransactionCard(props) {
    return (
        <div>
            <h2>{`${props.description}:   ${props.amount}`}</h2>
        </div>
    )
}

export default TransactionCard;
