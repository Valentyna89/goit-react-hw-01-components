import Profile from './Profie/Profile';
import Statistics from './Statistics/Statistics';
import FriendListItem from './FriendList/FriendListItem';
import TransactionsList from './Transactions/TransactionsList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Fragment } from 'react';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Fragment>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendListItem friends={friends} />

      <TransactionsList items={transactions} />
    </Fragment>
  );
};
