import { useState } from "react";

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
        <input
          type="text"
          placeholder="Search images"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
