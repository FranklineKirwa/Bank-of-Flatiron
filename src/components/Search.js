import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="ui large fluid icon input">
      {/* Input field for searching transactions */}
      <input
        type="text" // Specifies the input type as text
        placeholder="Search your Recent Transactions" // Placeholder text for the input field
        onChange={(e) => {
          console.log("Searching..."); // Log to the console whenever input changes
          handleSearch(e.target.value); // Call handleSearch with the current input value
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}
export default Search;

