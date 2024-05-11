
import { useState } from "react"; 
import style from "./Style.module.css";

const MainTable = ({ roles}) => {
    const [drag, setDrag] = useState(false);

    const handleStart = (e, row, col) => {

        let iniMouse = e.clientX;
        let iniSize  = document.getElementById(`${row}${col}`).offsetWidth;

        setDrag({
            iniMouse: iniMouse,
            iniSize:  iniSize
        })

    };

    const handleMove = (e, row, col) => {

        if(e.clientX){

            let iniMouse = drag.iniMouse;
            let iniSize  = drag.iniSize;
            let endMouse = e.clientX;

            let endSize = iniSize + (endMouse - iniMouse);

            document.getElementById(`${row}${col}`).style.width = `${endSize}px`;

        }

    };
    const data=roles.map(el=>Object.values(el));

    return (
      <tbody>
        {data.map((rowObj, i) => {
            const row = Object.values(rowObj) 
          return (
            <tr key={i}>
              {row.map((col, j) => {
                return (
                  <td class={style.cell} key={j} id = {`${i}${j}`}>
                    {data[i][j]}
                    <div className={style.dragger} draggable   = {true} onDragStart = {(e) => handleStart(e, i, j)} onDrag = {(e) => handleMove(e, i, j)}></div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };

export default MainTable