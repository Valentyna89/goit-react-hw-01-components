import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <div className={css.statistics_block}>
        <ul className={css.statistics_list}>
          <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.symbol.isRequired,
  percentage: PropTypes.number.isRequired,
};
