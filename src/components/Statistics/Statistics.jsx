import PropTypes from 'prop-types';

import {
  StatisticsWrap,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title className="title">{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem eventPercentage={percentage} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsWrap>
  );
};

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
