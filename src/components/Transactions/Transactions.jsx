import React from 'react';
import PropTypes from 'prop-types';
import {
  TransHistory,
  TransHistoryHead,
  TransHistoryName,
  TransHistoryItem,
} from './Transactions.styled';

export default function Transactions({ items }) {
  return (
    <TransHistory>
      <TransHistoryHead>
        <tr>
          <TransHistoryName>Type</TransHistoryName>
          <TransHistoryName>Amount</TransHistoryName>
          <TransHistoryName>Currency</TransHistoryName>
        </tr>
      </TransHistoryHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransHistoryItem>{type}</TransHistoryItem>
            <TransHistoryItem>{amount}</TransHistoryItem>
            <TransHistoryItem>{currency}</TransHistoryItem>
          </tr>
        ))}
      </tbody>
    </TransHistory>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
