import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-sm-3">
          <h5 className="mb-0">
            <i className="bi bi-list-ul ms-2 me-1"></i>Transactions
          </h5>
          <span className="badge bg-secondary me-2">{transactions.length}</span>
        </div>

        <div>
          <ul className="list-group">
            {transactions.length === 0 && (
              <li className="list-group-item text-muted text-center">
                No transactions yet. Add your first one
              </li>
            )}
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDeleteTransaction={onDeleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
