import React  from 'react';


const ActionButtons = (props) => {
  
  return (
    <div className="footer-actions">
      <button onClick={() => props.handleAddColumn()}>Add Column</button>
        <button onClick={() => props.handleRemoveColumn()}>Remove Column</button>
        <button onClick={() => props.handleAddRow()}>Add Row</button>
        <button onClick={() => props.handleRemoveRow()}>Remove Row</button>
    </div>
  )
};

export default ActionButtons;