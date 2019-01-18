import React from 'react'

function IncomeModal(context) {
    return (
        <div style = {!context.state.show ? {display : "none"} : {display : "block"}} className = "modal-overlay">
        <div className = "modal-box">
        <h1>What was it?</h1>
        <input className = "modal-input" value = {context.state.incomeDesc}></input>
        <button>Add it!</button>
        </div>
        </div>
    )
}

export default IncomeModal
