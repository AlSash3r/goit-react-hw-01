import css from "./TransactionHistory.module.css";
import clsx from "clsx";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.cellsRow} key={id}>
              <td className={clsx(css.cell, css.cellType)}>{type}</td>
              <td className={css.cell}>{amount}</td>
              <td className={css.cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}