import Profile from './Profie/Profile';
import user from '../components/user.json';
import Statistics from './Statistics/Statistics';
import data from '../components/data.json';
import FriendListItem from './FriendList/FriendListItem';
import friends from '../components/friends.json';
import TransactionsList from './Transactions/TransactionsList';
import transactions from '../components/transactions.json';
import { Fragment } from 'react';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  const { label, percentage } = data[0];
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

      <Statistics label={label} percentage={percentage} />

      <FriendListItem friends={friends} />

      <TransactionsList items={transactions} />
    </Fragment>
  );
};
