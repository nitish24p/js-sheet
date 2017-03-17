import React  from 'react';

const TableCell = (props) => {
  const  { value, rowIndex, columnIndex } = props;
  return (
    <td onMouseOver={(e) => console.log(e)}>
      <input value={value} 
      onChange={(e) => props.onCellEdit(rowIndex, columnIndex, e.target.value)}
      
      />
    </td>
  )
};

export default TableCell;