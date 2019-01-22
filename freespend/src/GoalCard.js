/* the user needs to be able to click the add new goal button, this will pop up a model that lets them enter an amount and
a description. this will contain 6 divs. The desc div, the amount div, two divs for the progess bar, a div to go around those
bars and a div to go around the entire card. The green divs width will be equal to the percentage in of the goal met.  */

import React, { Component } from "react";

export default class GoalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentComplete: 50,
      width: this.calculateWidth()
    };
    this.calculateWidth = this.calculateWidth.bind(this);
  }

  calculateWidth() {
    if (this.props.currentPaid === 0) {
      return { width: "0px" };
    } else {
      let percentComplete = (this.props.currentPaid / this.props.amount) * 100;
      this.setState({percentComplete})
      return { width: `${this.state.percentComplete.toString()}%` };
    }
  }

  render() {
    let style = this.calculateWidth();
    return (
      <div className="goal-wrapper">
        <div>
          <h1 className="goal-desc">{this.props.desc}:</h1>
          <h1 className="goal-current">
            <span className="blue-green">${this.props.currentPaid}</span> of{" "}
            <span className="light-orange">${this.props.amount}</span>
          </h1>
        </div>
        <div className="amount-bar">
          <div style={style} className="paid-bar" />
        </div>
      </div>
    );
  }
}
