const ShowBar = ({ columns }) => {
  
  
    return (
    <div>
      {columns.map((column) => {
        return (
          <label for={column} key={column}>
            <span>{column} </span>
            <input id={column} type="checkbox" onChange={(e) => console.log(e.target.value)}/>
          </label>
        );
      })}
    </div>
  );
};

export default ShowBar;
