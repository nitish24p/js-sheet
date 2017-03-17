import React  from 'react';

import TableRow from './TableRow.js';

const MainTable = (props) => {
  //console.log(props.matrix);
  const renderTableRows = props.matrix[0].map((row, key) => {
    return ( <TableRow rows={row} key={key} rowIndex={key}/>)
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