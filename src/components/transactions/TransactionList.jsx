import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <>
      <h1>Transaction list</h1>
      <ul className="list-group">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
