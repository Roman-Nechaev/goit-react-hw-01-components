import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendListWrap } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
