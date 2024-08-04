import React, { useEffect, useState } from "react";
import Search from "./Search"; // Import the Search component
import Transaction from "./Transaction"; // Import the Transaction component
import AddTransactionForm from "./AddTransactionForm"; // Import the AddTransactionForm component

function App() {
  // State to store the list of transactions
  const [transaction, setTransaction] = useState([]);

  // Effect to fetch transactions from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json()) // Parse the JSON from the response
      .then(transactions => setTransaction(transactions)) // Update the state with fetched transactions
      .catch(error => console.error("Error fetching transactions:", error)); // Handle potential errors
  }, []);

  // Function to handle adding a new transaction
  function handleSubmitData(newTransaction) {
    console.log(newTransaction);

    // Update local state to include the new transaction
    setTransaction(transactions => [...transactions, newTransaction]);

    // Define options for the POST request to add the new transaction to the backend
    const serverOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Specify the content type
      },
      body: JSON.stringify(newTransaction) // Convert the new transaction object to a JSON string
    };

    // Send the new transaction to the backend
    fetch("http://localhost:8001/transactions", serverOptions)
      .then(r => r.json()) // Parse the JSON response
      .then(newItem => console.log(newItem)) // Log the newly added item from the server
      .catch(error => console.error("Error adding transaction:", error)); // Handle potential errors
  }

  // Function to handle search and filter transactions based on search term
  function handleSearch(searchTerm) {
    // Filter transactions based on the search term
    setTransaction(transactions =>
      transactions.filter(transact =>
        transact.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search handleSearch={handleSearch} /> {/* Render Search component and pass handleSearch function */}
      <AddTransactionForm onSubmitData={handleSubmitData} /> {/* Render AddTransactionForm component and pass handleSubmitData function */}
      <Transaction transaction={transaction} /> {/* Render Transaction component and pass the list of transactions */}
    </div>
  );
}
export default App;
