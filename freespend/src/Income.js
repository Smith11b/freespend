import React from 'react';




const Income = function(props){
    return (<div className = "income">
        <h1 className = "top">Income</h1><img alt = "hand holding money" src = "./img/icons8-cash-in-hand-80.png"></img>
        <input value = {props.value}  onChange = {props.onChange} id = "income"></input>
        <button  onClick = {props.onClick} id = "plus">+</button>
    </div>)
}


export default Income;