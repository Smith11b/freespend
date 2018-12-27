import React from 'react';



const Income = function(props){
    return (<div className = "income">
        <h1 className = "top">Income</h1><img src = "./img/icons8-cash-in-hand-80.png"></img>
        <input id = "income"></input>
        <button id = "plus">+</button>
    </div>)
}


export default Income;