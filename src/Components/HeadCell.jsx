import { useState } from "react";

const HeadCell = ({ column, sorting, sortTable, searchData}) => {
    const isDesc = sorting.column === column && sorting.order === "desc";
    const isAsc = sorting.column === column && sorting.order === "asc";
    const sortingOrder = isDesc ? "asc" : "desc";


    const [searchValue, setSearchValue] = useState("");
    const submitForm = (e) => {
      e.preventDefault();
      searchData(searchValue, column + '_like');
    };
  
    return (
      
      <th>
        <div key={column} onClick={() => sortTable({ column, order: sortingOrder })}>
        <span>{column}</span>
        {isDesc && <span>&#9660;</span>}
        {isAsc && <span>&#9650;</span>}
        </div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder={`поиск по ${column}`}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </th>
    );
  };


export default HeadCell;