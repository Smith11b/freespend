import React from 'react'
import TransactionCard from './TransactionCard';

function Transactions(props) {
    return (
        <div>
            {props.transactions.map(transaction => {
                return <TransactionCard amount = {props.amount} description = {props.description} />
            })}
        </div>
    )
}

export default Transactions
