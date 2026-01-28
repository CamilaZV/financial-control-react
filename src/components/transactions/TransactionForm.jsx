import { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

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
  };

  const buttonClass = type === 'income' ? 'btn-success' : 'btn-danger';

  return (
    <div>
      <h5 className="my-3">New transaction</h5>
      <form onSubmit={handleSubmit}>
        <div>
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

          <label className="form-label">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="form-control mb-3"
          />

          <label className="form-label">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="form-control mb-3"
          />

          <label className="form-label">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="form-control mb-3"
          />

          <label className="form-label">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            className="form-control mb-3"
          />
        </div>
        <button type="submit" className={`btn ${buttonClass} w-100`}>
          Add {type}
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
