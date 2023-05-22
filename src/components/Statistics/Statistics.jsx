import PropTypes from 'prop-types';
import getRandomHexColor from './getRandomHexColor';
import {
  StatSection,
  Title,
  StatisticsList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatisticsList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
