import React, { Fragment } from "react";
import Profile from "./profile/Profile";
import user from "../user.json.js";
import Statistics from "./statistics/Statistics";
import statisticalData from "../statistical-data.json.js";
import FriendList from "./friendList/FriendList";
import friends from "../friends.json.js";
import TransactionHistory from "./transactions/TransactionHistory";
import transactions from "../transactions.json.js";

const App = () => (
  <Fragment>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;
