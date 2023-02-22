import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  width: 200px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
const setColorLine = props => {
  return props.statLine ? 'green' : 'red';
};

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${setColorLine};

  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 13px;
  transform: translate(0, -50%);
`;

export const Thumb = styled.div`
  margin-left: 30px;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;

  overflow: hidden;
`;

export const Avatar = styled.img``;

export const NameUser = styled.p`
  margin-left: 20px;
`;
