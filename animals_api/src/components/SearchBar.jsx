import { useState } from "react";

const SearchBar = ({ animals, setAnimals }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue && !animals.includes(inputValue)) {
      setAnimals([...animals, inputValue]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Add Animal</button>
    </div>
  );
};

export default SearchBar;