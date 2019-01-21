import React from "react";
import GoalHeader from "./GoalHeader";
import GoalCard from "./GoalCard";
import GoalModal from "./GoalModal";
import InputWarningModal from "./InputWarningModal";

function Goals(props) {
  return (
    <div>
      <InputWarningModal
        show={props.appState.showHomeWarning}
        toggleInputWarning={props.toggleWarning}
      />
      <GoalModal
        show={props.appState.showGoalModal}
        addGoal={props.addGoal}
        amount={props.appState.goalInput}
        desc={props.appState.goalDesc}
        amountChange={props.goalAmountChange}
        descChange={props.goalDescChange}
      />
      <GoalHeader />
      <div className="goal-mid">
        <div>
          <button onClick={props.toggleGoalModal} className="goal-button">
            Add New Goal
          </button>
        </div>
        {props.appState.goals.map(goal => (
          <GoalCard amount={goal.amount} desc ={goal.desc} currentPaid={goal.currentAmount} />
        ))}
      </div>
    </div>
  );
}

export default Goals;
