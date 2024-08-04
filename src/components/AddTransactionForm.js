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
      amount: "0",
    });
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          {/* Input for date */}
          <input
            value={data.date}
            type="date" // Input type for selecting a date
            name="date" // Name of the input field
            onChange={handleChange} // Handle input change
          />
          {/* Input for description */}
          <input
            value={data.description}
            type="text" // Input type for text
            name="description" // Name of the input field
            placeholder="Description" // Placeholder text for the input field
            onChange={handleChange} // Handle input change
          />
          {/* Input for category */}
          <input
            value={data.category}
            type="text" // Input type for text
            name="category" // Name of the input field
            placeholder="Category" // Placeholder text for the input field
            onChange={handleChange} // Handle input change
          />
          {/* Input for amount */}
          <input
            value={data.amount}
            type="number" // Input type for number
            name="amount" // Name of the input field
            placeholder="Amount" // Placeholder text for the input field
            step="0.01" // Step value for the number input to allow decimal amounts
            onChange={handleChange} // Handle input change
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
