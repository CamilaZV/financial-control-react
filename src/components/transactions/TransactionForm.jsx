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
    setType('');
  };

  return (
    <>
      <h1>Records</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-select"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="form-control"
          />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="form-control"
          />

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="form-control"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
