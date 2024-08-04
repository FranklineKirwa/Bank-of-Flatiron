import { useState } from "react";

function AddTransactionForm({ onSubmitData }) {
  const [data, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "0",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(data);
    setData({
      date: "",
      description: "",
      category: "",
      amount: "0",
    });
  };
    return (
      <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="inline fields">
            <input
              value={data.date}
              type="date"
              name="date"
              onChange={handleChange}
            />
            <input
              value={data.description}
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <input
              value={data.category}
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
            />
            <input
              value={data.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
export default AddTransactionForm
