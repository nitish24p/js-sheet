import React  from 'react';

import TableCell from './TableCell.js';

const TableRow = (props) => {
  const { rowIndex } = props;
  const renderTableCells = props.rows.map((cellValue, key) => {
    return (<TableCell value={cellValue} key={key} rowIndex={rowIndex} columnIndex={key}/>)
  })
  return (
    <tr>
      {renderTableCells}
    </tr>
  )
};

export default TableRow;