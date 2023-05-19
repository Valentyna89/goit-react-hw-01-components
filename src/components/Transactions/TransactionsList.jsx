import Transactions from './Transactions';
import css from './Transactions.module.css';

export default function TransactionsList({ items }) {
  return (
    <table className={css.transHistory}>
      <thead className={css.transHistoryHead}>
        <tr>
          <th className={css.transHistoryName}>Type</th>
          <th className={css.transHistoryName}>Amount</th>
          <th className={css.transHistoryName}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tBody}>
        {items.map(item => (
          <Transactions
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
