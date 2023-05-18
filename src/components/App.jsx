import Profile from './Profie/Profile';
import user from '../components/user.json';
import FriendListItem from './FriendList/FriendListItem';
import friends from '../components/friends.json';
import { Fragment } from 'react';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <FriendListItem items={friends} />
    </Fragment>
  );
};
