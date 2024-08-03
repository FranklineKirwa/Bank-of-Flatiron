import React from "react";
import TransactionList from "./TransactionList";



function Transaction({transaction}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
       {/*render a list of <Transaction> components here */}
        {transaction.map(transact =>{
       return <TransactionList
               date={transact.date}
               description={transact.description}
              catergory={transact.catergory}
               amount={transact.amount}
               key={transact.id}
         />
       })}
      </tbody>
    </table>
  );
}

export default Transaction;
