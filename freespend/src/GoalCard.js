/* the user needs to be able to click the add new goal button, this will pop up a model that lets them enter an amount and
a description. this will contain 6 divs. The desc div, the amount div, two divs for the progess bar, a div to go around those
bars and a div to go around the entire card. The green divs width will be equal to the percentage in of the goal met.  */

import React, { Component } from 'react'

export default class GoalCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            percentComplete: 0
        }
    }
    render() {
        return (
            <div className = "goal-wrapper">
                <div><h1>{this.props.desc}</h1><h1>{this.props.currentPaid}</h1><h1>{this.props.amount}</h1></div>
                <div className = "amount-bar"><div className = "paid-bar"></div></div>
            </div>
        )
    }
}
