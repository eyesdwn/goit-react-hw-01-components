import React from "react";
import transactions from "../../transactions.json.js";
import TableRow from "./TableRow";

const TransactionHistory = () => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <TableRow items={transactions} />
    </tbody>
  </table>
);

export default TransactionHistory;
