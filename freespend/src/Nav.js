import React from "react";
import { NavLink } from "react-router-dom";

const Nav = function(props) {
  return (
    <div className="nav">
      <NavLink to="/expenses">
        <div id="expenses-button" className="nav-button">
          <img
            src="./img/icons8-debt-80.png"
            alt="a money sign on a heavy weight"
          />
          <p>Expenses</p>
        </div>
      </NavLink>

      <NavLink to="/transactions">
        <div id="transaction-button" className="nav-button">
          <img
            src="./img/icons8-ledger-80.png"
            alt="a book or ledger with a money sign in it"
          />
          <p>Transactions</p>
        </div>
      </NavLink>
      <NavLink to="/goals">
        <div id="goal-button" className="nav-button">
          <img src="./img/icons8-prefab-house-80.png" alt="a house icon" />
          <p>Goals</p>
        </div>
      </NavLink>
      <NavLink to="send-money">
        <div id="send-button" className="nav-button">
          <img
            src="./img/icons8-exchange-80.png"
            alt=" a send or recieve money icon"
          />
          <p>Send/Recieve</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Nav;
