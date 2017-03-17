import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

// components
import MainTable from './components/MainTable.js';

// Helpers
import createSheetMatrix from './helpers/createSheetMatrix.js'; 
import { saveItemToLocalStorage, fetchItemFromLocalStorage } from './helpers/LocalStorageHelper.js';

const rows = 6;
const columns = 7;


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

  saveSheetToLocalStorage() {
    localStorage.setItem('sheet', JSON.stringify(this.state.matrix));
  }

  handleCellEdit(rowIndex, columnIndex, value) {
    const matrix = [...this.state.matrix];
    matrix[rowIndex][columnIndex] = value;

    this.setState({
      matrix
    });
    saveItemToLocalStorage('sheet', this.state.matrix);
  }

  componentWillMount() {
    const newMatrix = createSheetMatrix(6,7);
    let sheet = {};
    if (fetchItemFromLocalStorage('sheet')) {
      sheet = JSON.parse(localStorage.getItem('sheet'))
      this.setState({
        matrix: sheet 
      })
    } else {
      const newMatrix = createSheetMatrix(6,7)
      this.setState({
        matrix: newMatrix
      });
    }
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

    saveItemToLocalStorage('sheet', this.state.matrix)
  }

  handleRemoveColumn() {
    const matrix = [...this.state.matrix];
    const newMatrix = matrix.map((row, key) => row.slice(0, row.length - 1));

    this.setState({
      matrix: newMatrix,
    });

    saveItemToLocalStorage('sheet', this.state.matrix)
  }

  handleAddRow() {
    const newRow = [];
    const columnCount = this._calculateNumberOfColumns();
    const matrix = [...this.state.matrix];

    matrix.push(new Array(columnCount).fill(''));

    this.setState({
      matrix
    });

    saveItemToLocalStorage('sheet', this.state.matrix)
  }

  handleRemoveRow() {
    let matrix = [...this.state.matrix];
    matrix = matrix.slice(0, matrix.length - 1);
    this.setState({
      matrix
    });

    saveItemToLocalStorage('sheet', this.state.matrix)
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
