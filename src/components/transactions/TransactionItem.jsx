import { formatCurrency } from '../../utils/formatCurrency';

function TransactionItem({ transaction, onDeleteTransaction }) {
  return (
    <li className="list-group">
      <p>{formatCurrency(transaction.amount)}</p>
      <p>{transaction.type}</p>
      <p>{transaction.category}</p>
      <p>{transaction.date}</p>
      <button onClick={() => onDeleteTransaction(transaction.id)}>
        Delete
      </button>
    </li>
  );
}

export default TransactionItem;
