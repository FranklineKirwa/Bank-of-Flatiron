// import React from "react";
import {useState} from "react";

function AddTransactionForm({onSubmitData}) {

  const[data, subData]=useState({
    date:"",
    description:"",
    category:"",
    amount:"0",
  })

  const change=(e)=>{
    subData({...data,[e.target.nam]:e.target.value})

  }
  const submit=(e)=>{
        e.preventDefault()
        onSubmitData(data)
      }
  return (
    <div className="ui segment">
      <form onClick={change} onSubmit={submit} className="ui form" >
        <div className="inline fields">
          <input defaultValue={data.date} type="date" name="date" />
          <input defaultValue={data.description} type="text" name="description" placeholder="Description" />
          <input defaultValue={data.category} type="text" name="category" placeholder="Category" />
          <input defaultValue={data.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
           Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
