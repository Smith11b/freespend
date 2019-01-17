import React from "react";

const TransactionHeader = function(props) {
  return (
    <div className="transaction-head" >
      <h1 className="top transaction-h1">Transactions</h1>
      <img
        alt="ledger icon"
        src="./img/icons8-ledger-80.png"
      />
    </div>
  );
};

export default TransactionHeader;
