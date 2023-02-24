import PropTypes from 'prop-types';

import { upperCaseItem } from '../utils';

import {
  TransactionHistoryWrap,
  StyleTR,
  StyleTH,
  StyleTbody,
  StyleTD,
  StyleTHEAD,
  StyleTRTbody,
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
          <StyleTRTbody key={id}>
            <StyleTD>{upperCaseItem(type)}</StyleTD>
            <StyleTD>{amount}</StyleTD>
            <StyleTD>{currency}</StyleTD>
          </StyleTRTbody>
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
