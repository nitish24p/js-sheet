import React  from 'react';

const TableCell = (props) => {
  const  { value, rowIndex, columnIndex } = props;
  return (
    <td>
      <input value={value}/>
    </td>
  )
};

export default TableCell;