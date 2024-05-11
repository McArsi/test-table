import { useState } from "react";

const SearchBar = ({ searchData }) => {
  const [searchValue, setSearchValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    searchData(searchValue, 'q');
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="поиск"
          onChange={(e) => (setSearchValue(e.target.value))}
        />
      </form>
    </div>
  );
};

export default SearchBar;
