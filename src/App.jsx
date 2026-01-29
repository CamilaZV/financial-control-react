import { useEffect, useState } from 'react';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import BalanceSummary from './components/summary/BalanceSummary';
import FilterBar from './components/filters/FilterBar';
import { CATEGORIES } from './constants/categories';

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

  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all',
    search: '',
  });

  const handleChangeFilters = (partial) => {
    setFilters((prev) => {
      const next = { ...prev, ...partial };
      if (next.type === 'all') {
        next.category = 'all';
      }

      if (partial.type && partial.type !== prev.type) {
        next.category = 'all';
      }

      if (next.type !== 'all') {
        const validCategories = CATEGORIES[next.type] || [];
        if (
          next.category != 'all' &&
          !validCategories.includes(next.category)
        ) {
          next.category = 'all';
        }
      }
      return next;
    });
  };

  let availableCategoriesForFilter = [];

  if (filters.type === 'income') {
    availableCategoriesForFilter = CATEGORIES.income;
  }

  if (filters.type === 'expense') {
    availableCategoriesForFilter = CATEGORIES.expense;
  }

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

  const filteredTransaction = transactions.filter((t) => {
    if (filters.type !== 'all' && t.type !== filters.type) {
      return false;
    }

    if (filters.category !== 'all' && t.category !== filters.category) {
      return false;
    }

    if (
      filters.search &&
      !t.description.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const sortedFilteredTransactions = [...filteredTransaction].sort(
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
          <FilterBar
            filters={filters}
            availableCategories={availableCategoriesForFilter}
            onChangeFilters={handleChangeFilters}
          />
          <TransactionList
            transactions={sortedFilteredTransactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
