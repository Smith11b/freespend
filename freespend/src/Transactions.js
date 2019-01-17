import React from 'react'
import TransactionCard from './TransactionCard';
import TransactionHeader from "./TransactionHeader";

function Transactions(props) {
    return (
        <div>
            <TransactionHeader />
        <div className = "transaction-mid">
            {props.transactions.map(transaction => {
                return <TransactionCard amount = {transaction.amount} description = {transaction.description} />
            })}
        </div>
        </div>
    )
}

export default Transactions;
