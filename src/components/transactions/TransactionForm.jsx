import { useEffect, useRef, useState } from 'react';
import { CATEGORIES } from '../../constants/categories';

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const availableCategories = CATEGORIES[type];

  const amountInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;
    if (!category || !description.trim() || !type || !date) return;

    const newTransaction = {
      id: crypto.randomUUID(),
      type,
      amount: Number(amount),
      category,
      description,
      date,
    };
    onAddTransaction(newTransaction);

    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
    setType('income');

    amountInputRef.current.focus();
  };

  useEffect(() => {
    amountInputRef.current.focus();
  }, []);

  useEffect(() => {
    setCategory('');
  }, [type]);

  const buttonClass = type === 'income' ? 'btn-success' : 'btn-danger';

  const buttonIcon = type === 'income' ? 'bi-plus-circle' : 'bi-dash-circle';

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="mb-3">
          <i className="bi bi-pencil-square me-2"></i>New transaction
        </h5>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control mb-3"
            ref={amountInputRef}
          />

          <label className="form-label">Type</label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-select mb-3"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <label className="form-label">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select mb-3"
            disabled={!availableCategories}
          >
            <option value="">Select category </option>
            {availableCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label className="form-label">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control mb-3"
          />

          <label className="form-label">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control mb-3"
          />

          <button type="submit" className={`btn ${buttonClass} w-100`}>
            <i className={`bi ${buttonIcon} me-1`}></i>
            Add {type}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
