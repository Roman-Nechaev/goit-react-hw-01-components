import styled from '@emotion/styled';

export const StatisticsWrap = styled.section`
  text-align: center;
  width: 450px;

  display: block;
  margin: 0 auto;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);

  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 25px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const setColor = props => {
  const event = props.eventPercentage;

  if (event >= 0 && event <= 10) {
    return '#a43cf3';
  } else if (event >= 10 && event <= 20) {
    return '#e64d66';
  } else if (event >= 20 && event <= 30) {
    return '#dbdf69';
  } else if (event >= 30 && event <= 40) {
    return '#8fe4f7';
  } else if (event >= 40 && event <= 50) {
    return '#21b7c4';
  }
};
export const StatListItem = styled.li`
  background-color: #00ff51;
  width: 100%;
  height: 100%;
  border: 1px solid #bababa54;

  background-color: ${setColor};
`;

export const Label = styled.span`
  padding-top: 10px;
  display: flex;
  justify-content: center;

  color: white;
`;

export const Percentage = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  display: flex;
  justify-content: center;

  font-weight: 500;
  font-size: 20px;
`;
