import React from 'react';



const Nav = function(props){
    return (<div className = "nav">
        <div id = "expenses-button" className = "nav-button"><img src = "./img/icons8-debt-80.png" alt = "a money sign on a heavy weight"></img><p>Expenses</p></div>
        <div id = "transaction-button" className = "nav-button"><img src = "./img/icons8-ledger-80.png" alt = "a book or ledger with a money sign in it"></img><p>Transactions</p></div>
        <div id = "goal-button" className = "nav-button"><img src = "./img/icons8-prefab-house-80.png" alt = "a house icon"></img><p>Goals</p></div>
        <div id = "send-button" className = "nav-button"><img src = "./img/icons8-exchange-80.png"alt = " a send or recieve money icon"></img><p>Send/Recieve</p></div>
        </div>)
}


export default Nav;