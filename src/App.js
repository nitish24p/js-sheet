import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.scss';

// components
import MainTable from './components/MainTable.js';

const rows = 6;
const columns = 7;

const createSheetMatrix = (rows, columns) => {
  let result = [];
  for (var i = 0; i < rows; i++) {
    result.push(new Array(columns).fill(''));
  }

  return result;
}


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      matrix: {},
      rows: '',
      columns: ''
    };

    this.handleCellEdit = this.handleCellEdit.bind(this);
  }

  handleCellEdit(rowIndex, columnIndex, value) {
    const matrix = [...this.state.matrix];
    matrix[rowIndex][columnIndex] = value;

    this.setState({
      matrix
    });
  }

  componentWillMount() {
    const newMatrix = createSheetMatrix(6,7)
    this.setState({
      matrix: newMatrix
    });
  }

  _calculateNumberOfColumns () {
    const matrix = this.state.matrix;
    if (!matrix.length) return;
    return matrix[0].length
  }

  handleAddColumn() {
    const matrix = [...this.state.matrix];
    const newMatrix = matrix.map((row, key) => row.concat(''));

    this.setState({
      matrix: newMatrix,
    });
  }

  handleRemoveColumn() {
    const matrix = [...this.state.matrix];
    const newMatrix = matrix.map((row, key) => row.slice(0, row.length - 1));

    this.setState({
      matrix: newMatrix,
    });
  }

  handleAddRow() {
    const newRow = [];
    const columnCount = this._calculateNumberOfColumns();
    const matrix = [...this.state.matrix];

    for (var i = 0; i < columnCount; i++) {
      newRow.push('');
    }
    matrix.push(newRow);
    this.setState({
      matrix
    });
  }

  handleRemoveRow() {
    let matrix = [...this.state.matrix];
    matrix = matrix.slice(0, matrix.length - 1);
    this.setState({
      matrix
    });
  }

  render() {
    return (
      <div className="App">
        <MainTable matrix={this.state.matrix} onCellEdit={this.handleCellEdit}/>
        <button onClick={() => this.handleAddColumn()}>Add Column</button>
        <button onClick={() => this.handleRemoveColumn()}>Remove Column</button>
        <button onClick={() => this.handleAddRow()}>Add Row</button>
        <button onClick={() => this.handleRemoveRow()}>Remove Row</button>
      </div>
    );
  }
}

export default App;
