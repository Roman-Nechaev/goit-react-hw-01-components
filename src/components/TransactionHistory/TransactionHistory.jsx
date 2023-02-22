import PropTypes from 'prop-types';

import {
  TransactionHistoryWrap,
  StyleTR,
  StyleTH,
  StyleTbody,
  StyleTD,
  StyleTHEAD,
} from './TransactionHistory.stuled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryWrap>
      <StyleTHEAD>
        <StyleTR>
          <StyleTH>Type</StyleTH>
          <StyleTH>Amount</StyleTH>
          <StyleTH>Currency</StyleTH>
        </StyleTR>
      </StyleTHEAD>
      <StyleTbody>
        {items.map(({ id, type, amount, currency }) => (
          <StyleTR key={id}>
            <StyleTD>{type}</StyleTD>
            <StyleTD>{amount}</StyleTD>
            <StyleTD>{currency}</StyleTD>
          </StyleTR>
        ))}
      </StyleTbody>
    </TransactionHistoryWrap>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
