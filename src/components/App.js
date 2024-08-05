import React, { useEffect, useState } from "react";
import Search from "./Search";
import Transaction from "./Transaction";
import AddTransactionForm from "./AddTransactionForm";

function App() {
  const [transactions, setTransaction] = useState([]);
  const[filteredTransactions, setFilteredTransactions]=useState([]);

  // Effect to fetch transactions from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(transactions =>{
        setTransaction(transactions);// Update the state with fetched transactions
        setFilteredTransactions(transactions);
      })
      .catch(error => console.error("Error fetching transactions:", error));
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
      .then(r => r.json())
      .then(newItem => {
        console.log(newItem);
        setTransaction(transactions => [...transactions, newItem]);
        setFilteredTransactions(transactions => [...transactions, newItem]);
      })
      .catch(error => console.error("Error adding transaction:", error)); 
  }

  function handleSearch(searchTerm) {
    if (searchTerm.trim() === "") {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter(transact =>
          transact.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm onSubmitData={handleSubmitData} />
      <Transaction transaction={filteredTransactions} />
    </div>
  );
}
export default App;

