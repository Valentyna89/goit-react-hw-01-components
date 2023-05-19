import FriendList from './FriendList';
import css from './FriendList.module.css';

export default function friendListItem({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.friendListItem} key={friend.id}>
          <FriendList
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
