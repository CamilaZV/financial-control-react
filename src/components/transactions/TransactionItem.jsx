import { formatCurrency } from '../../utils/formatCurrency';

function TransactionItem({ transaction, onDeleteTransaction }) {
  const amountClass =
    transaction.type === 'income' ? 'text-success' : 'text-danger';
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{transaction.category}</strong>
        <div className="text-muted small">
          {transaction.description} • {transaction.date}
        </div>
      </div>

      <div className="d-flex align-items-center text-end">
        <span className={amountClass}>
          {formatCurrency(transaction.amount)}
        </span>
        <button
          onClick={() => onDeleteTransaction(transaction.id)}
          className="btn btn-sm ms-2  border-start ps-3"
          title="Delete transaction"
        >
          <span>
            <i className="fa-regular fa-trash-can fs-6 text-warning "></i>
          </span>
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
