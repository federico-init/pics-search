import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(input);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleFormSubmit}>
        <div>Enter Search</div>
        <input type="text" placeholder="Search..." onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
