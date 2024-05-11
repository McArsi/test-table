import { useEffect, useState } from "react";
import style from "./Style.module.css";
import HeadTable from "./HeadTable";
import MainTable from "./MainTable";
import SearchBar from "./SearchBar";
import ShowBar from "./ShowBar";


const Table = () => {
  const [roles, setTable] = useState([]);
  const [sorting, setSorting] = useState({ column: "id", order: "asc" });
  const [searchValue, setSearchValue] = useState('');
  const [param, setParam] = useState ('');
  const columns = ["id", "name", "clan",  "color", "description"];
  
  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };
  const searchData = (newSearchValue, newParam) => {
    setSearchValue (newSearchValue);
    setParam (newParam)
  }

  useEffect(() => {
    const url = `http://localhost:3000/roles?_sort=${sorting.column}&_order=${sorting.order}&${param}=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((roles) => {
        setTable(roles);
      });
  }, [sorting, searchValue]);

  return (
    <div>
      <SearchBar searchData = {searchData} />
      <ShowBar columns={columns} />
      <table>
        <HeadTable columns={columns} sorting={sorting} sortTable={sortTable} searchData={searchData}/>
        <MainTable roles={roles}/>
      </table>
    </div>
  );
};

export default Table;
