import React from "react";
import Profile from "./components/Profile/Profile";
import ListProfile from "./components/Profile/ListProfile";
import user from "./user.json";
import statistics from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import Statistics from "./components/Statistics/Statistics";
import ListStat from "./components/Statistics/ListStat";
import FriendList from "./components/Friends/FriendList";
import FriendListItem from "./components/Friends/FriendListItem";
import TransactionHistory from "./components/Transactions/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      >
        <ListProfile stats={user.stats} />{" "}
      </Profile>{" "}
      <Statistics title>
        <ListStat statistics={statistics} />{" "}
      </Statistics>{" "}
      <FriendList>
        <FriendListItem friends={friends} />{" "}
      </FriendList>{" "}
      <TransactionHistory items={transactions} />{" "}
    </>
  );
}

export default App;
