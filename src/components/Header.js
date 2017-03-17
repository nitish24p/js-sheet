import React  from 'react';


const Header = (props) => {
  const { rows, columns } = props;
  return (
    <div>
      <nav className="header">
        <div className="create-sheet-wrapper">
          <input placeholder="enter number of rows" value={rows} 
            onChange={(e) => props.handleMatrixSizeChange('rows', e.target.value)}/>
          <input placeholder="enter number of columns" value={columns} 
            onChange={(e) => props.handleMatrixSizeChange('columns', e.target.value)}/>
          <button onClick={() => props.createSheet()}>Create Sheet</button>
        </div>
      </nav>
    </div>
  )
};

export default Header;