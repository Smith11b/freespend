import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./ModalProvider";


ReactDOM.render(
  <ModalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// This is a comment reference for me to work on the project with, it will be removed once project is finised.
// I will update this as I go through the projedt to have a notation of my thouth process and how things
// actually turned out.

// User flow for this project.
// 1. User logs in via simple button at the bottom of the home screen.
// 2. On main screen user can add expenses, income, and quickly check to see if they can afford a purchase.
// 3. On the bottom four buttons, user can go to a fixed espenses screen, a transactions screen/ a goals screen
// and a send and recieve money screen.

// 3A. Expenses: this screen will allow the user to add or tweak known recuring expenses, as well as split their
// spend up weekly, bi weekly, or monthly to correspond with their check or bill period. This will then update
// the users fixed expenses total, and reflect that in their free spend amount.
// The apps state will have a fixed expense property, that will be updated by a total method that gets called
// any time a new expense is updated. (changed added or deleted.) The fixed expense property will then update
// the free spend amount by calling a similar or the same funciton I haven't decided yet.

// 3B. Transactions: The screen will show a list of the last 20 income and expense adds and will reflect edited
// transactions as well. It will also reflect the ballance of freespend after each transaction.

// 3C. Goals, this section will allow the user to set specific goals, name them, and add freespend to them when they
// add to them via their savings account.

// 3D. Send and recieve. this section will require an api call. and an account, it is currently here for show as
// I am not a bank and do not have access to banking info.
