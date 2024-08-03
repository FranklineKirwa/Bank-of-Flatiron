import React,{ useEffect ,useState} from "react";
import Search from "./Search"
import Transaction from "./Transaction"
import AddTransactionForm from "./AddTransactionForm"


function App() {
  const [transaction, setTransaction]=useState([])

  useEffect(()=>{
  fetch("http://localhost:8001/transactions")
   .then(response => response.json())
   .then(transaction => setTransaction(transaction))
  },[]);
    console.log(transaction)

    function handleSubmitData(newTransaction){
      console.log(newTransaction)
    }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search/>
     <AddTransactionForm onSubmitData={handleSubmitData}/>
    <Transaction transaction={transaction}/>
    </div>
  );
}

export default App;
