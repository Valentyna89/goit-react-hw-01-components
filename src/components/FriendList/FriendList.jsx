import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ avatar, name, status }) {
  return (
    <>
      <span
        className={`${css.status} ${
          status ? css.statusOnline : css.statusOffline
        }`}
      ></span>
      <img className={css.avatarItem} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
