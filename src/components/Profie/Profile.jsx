import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsBlock,
  Stats,
  StatsLi,
  LabelName,
  Quantity,
} from './Profile.styled';

export default function Profile ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsBlock>
        <Stats>
          <StatsLi>
            <LabelName>Followers</LabelName>
            <Quantity>{followers}</Quantity>
          </StatsLi>
          <StatsLi>
            <LabelName>Views</LabelName>
            <Quantity>{views}</Quantity>
          </StatsLi>
          <StatsLi>
            <LabelName>Likes</LabelName>
            <Quantity>{likes}</Quantity>
          </StatsLi>
        </Stats>
      </StatsBlock>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
