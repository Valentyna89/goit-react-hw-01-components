import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export  function Transactions({ type, amount, currency }) {
  return (
    <tr className={css.transHistoryItems}>
      <td className={css.transHistoryItem}>{type}</td>
      <td className={css.transHistoryItem}>{amount}</td>
      <td className={css.transHistoryItem}>{currency}</td>
    </tr>
  );
}

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
