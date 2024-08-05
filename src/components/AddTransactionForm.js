import { useState } from "react";

function AddTransactionForm({ onSubmitData }) {
  // State to hold form data with default values
  const [data, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "0",
  });

  // Handle changes to form input fields
  const handleChange = (e) => {
    // Update the state with the new value of the changed input field
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSubmitData(data); // Pass the form data to the parent component's handler
    // Reset the form fields to their default values
    setData({
      date: "",
      description: "",
      category: "",
      amount: "",
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
export default AddTransactionForm;
