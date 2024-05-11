
import HeadCell from "./HeadCell";

const HeadTable = ({ columns, sorting, sortTable, searchData }) => {


  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeadCell
            column={column}
            sorting={sorting}
            sortTable={sortTable}
            searchData = {searchData}
            key={column}
          />
        ))}
      </tr>

    </thead>
  );
};

export default HeadTable;
