import { useEffect, useState } from 'react';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import BalanceSummary from './components/summary/BalanceSummary';

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const transactionData = localStorage.getItem('transactions');
      if (!transactionData) return [];

      const parsed = JSON.parse(transactionData);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="container py-4">
      <div className="mb-5 text-center">
        <h1 className="fw-bold">Personal Finance Tracker</h1>
        <p className="text-muted">Track your income, expenses and balance</p>
      </div>

      <BalanceSummary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        balance={balance}
      />

      <div className="row">
        <div className="col-md-4">
          <TransactionForm onAddTransaction={addTransaction} />
        </div>
        <div className="col-md-8">
          <TransactionList
            transactions={sortedTransactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
