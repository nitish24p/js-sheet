import React  from 'react';

import TableRow from './TableRow.js';

const MainTable = (props) => {
  console.log(props.matrix.length);
  const renderTableRows = props.matrix.map((row, key) => {
    console.log(key,row);
    return ( <TableRow rows={row} key={key} rowIndex={key} onCellEdit={props.onCellEdit}/>)
  })

  return (
    <div>
      <table className='table-sheet'>
        <tbody>
          {renderTableRows}
        </tbody>
      </table>
    </div>
  )
};

export default MainTable;