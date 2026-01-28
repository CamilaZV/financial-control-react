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
        <span className={`fw-semibold ${amountClass}`}>
          {formatCurrency(transaction.amount)}
        </span>

        <button
          onClick={() => onDeleteTransaction(transaction.id)}
          className="btn btn-sm ms-3 btn-outline-danger"
          title="Delete transaction"
        >
          <span>
            <i className="bi bi-trash"></i>
          </span>
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
