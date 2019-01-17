import React from 'react'
import TransactionCard from './TransactionCard';

function Transactions(props) {
    return (
        <div>
            {props.transactions.map(transaction => {
                return <TransactionCard amount = {transaction.amount} description = {transaction.description} />
            })}
        </div>
    )
}

export default Transactions;
