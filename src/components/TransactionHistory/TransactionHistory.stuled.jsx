import styled from '@emotion/styled';

export const TransactionHistoryWrap = styled.table`
  margin: 0 auto;

  table-layout: fixed;
  width: 500px;

  border-collapse: collapse;
  border: 1px solid #c5c5c5;
  border-radius: 8px;

  overflow: hidden;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #01bbd6;
`;

export const StyleTHEAD = styled.thead``;

export const StyleTR = styled.tr``;

export const StyleTH = styled.th`
  padding: 10px;

  border: 1px solid #ffffff;

  color: #ffffff;
`;

export const StyleTbody = styled.tbody`
  text-align: center;
`;

export const StyleTRTbody = styled.tr`
  background-color: #ffffff;

  &:not(:nth-of-type(2n-1)) {
    background-color: #ebecec;
  }
`;
export const StyleTD = styled.td`
  padding: 15px;

  border: 1px solid #c5c5c5;
`;
