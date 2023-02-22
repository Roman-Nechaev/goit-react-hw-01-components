import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 280px;
  margin: 0 auto;
  overflow: hidden;

  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Description = styled.div`
  font-weight: 500;

  text-align: center;
  padding-top: 20px;
`;
export const AvatarWrap = styled.div`
  width: 135px;
  height: 135px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;

  border: 2px solid #b5b1b197;
`;
export const Avatar = styled.img`
  margin-top: 10px;

  width: auto;
  height: 100%;
`;

export const ProfileName = styled.p`
  margin-bottom: 10px;

  font-weight: 700;
  text-align: center;

  color: #212121;
`;

export const ProfileTag = styled.p`
  color: #757575;
`;

export const ProfileLocation = styled.p`
  color: #757575;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;

  background-color: #f3f6f9;
`;

export const ProfileStatsItem = styled.li`
  padding: 20px;

  border: 2px solid #a3adb956;
`;

export const Label = styled.span`
  color: #a3adb9;
`;

export const Quantity = styled.span`
  margin-top: 5px;

  display: flex;
  justify-content: center;

  font-weight: 500;

  /* color: rgb(14, 38, 255); */
`;
