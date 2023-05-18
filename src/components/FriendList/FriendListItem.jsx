import FriendList from './FriendList';
import css from './FriendList.module.css';

export default function friendListItem({ items }) {
  return (
    <ul className={css.friendList}>
      {items.map(item => (
        <li className={css.friendListItem} key={item.id}>
          <FriendList
            avatar={item.avatar}
            name={item.name}
            status={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
