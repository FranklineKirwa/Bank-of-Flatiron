import React from "react";
import TransactionList from "./TransactionList"; // Import the TransactionList component

function Transaction({ transaction }) {
  return (
    <>
      {/* Render a table to display the transactions */}
      <table className="ui celled striped padded table">
        <thead>
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
        </thead>
        <tbody>

          {/* Iterate over the transaction array and render a TransactionList component for each transaction */}
          {transaction.map((transact) => (
            <TransactionList
              key={transact.id} // Unique key for each row to help React identify which items have changed
              date={transact.date} // Pass transaction date to TransactionList
              description={transact.description} // Pass transaction description to TransactionList
              category={transact.category} // Pass transaction category to TransactionList
              amount={transact.amount} // Pass transaction amount to TransactionList
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Transaction;
