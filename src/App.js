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
    //console.log(this.state.matrix.length);
  }

  _calculateNumberOfRows () {
    //const add
  }

  addColumnToSheet() {
    const matrix = [...this.state.matrix];
    const newMatrix = matrix.map((row, key) => row.concat(''));

    this.setState({
      matrix: newMatrix,
    });
  }

  removeColumnToSheet() {
    const matrix = [...this.state.matrix];
    const newMatrix = matrix.map((row, key) => row.slice(0, row.length - 1));

    this.setState({
      matrix: newMatrix,
    });
  }

  render() {
    return (
      <div className="App">
        <MainTable matrix={this.state.matrix} onCellEdit={this.handleCellEdit}/>
        <button onClick={() => this.addColumnToSheet()}>Add Column</button>
        <button onClick={() => this.removeColumnToSheet()}>Remove Column</button>
        <button>Add Row</button>
      </div>
    );
  }
}

export default App;
