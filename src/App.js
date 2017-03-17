import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

// components
import MainTable from './components/MainTable.js';
import Header from './components/Header.js';
import ActionButtons from './components/ActionButtons.js';

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
      columns: '',
      isMousePressed: false
    };

    this.handleCellEdit = this.handleCellEdit.bind(this);
    this.handleMatrixSizeChange = this.handleMatrixSizeChange.bind(this);
    this.createSheet = this.createSheet.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.handleRemoveColumn = this.handleRemoveColumn.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleRemoveRow = this.handleRemoveRow.bind(this);
  }

  handleMouseDown() {
    this.setState({
      isMousePressed: !this.state.isMousePressed,
    });
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
    let sheet = {};
    if (fetchItemFromLocalStorage('sheet')) {
      sheet = JSON.parse(localStorage.getItem('sheet'))
      this.setState({
        matrix: sheet 
      })
    } else {
      this.setState({
        matrix: [] 
      })
    }
  }

  createSheet() {
    console.log(this.state.rows, this.state.columns);
    const newMatrix = createSheetMatrix(parseInt(this.state.rows, 10), parseInt(this.state.columns, 10));
    this.setState({
      matrix: newMatrix
    });
    saveItemToLocalStorage('sheet', this.state.matrix)
  }

  handleMatrixSizeChange(type, value) {
    if (type === 'rows') {
      this.setState({
        rows: value,
      });
    } else {
      this.setState({
        columns: value,
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
        <Header  rows={this.state.rows} columns={this.state.columns} 
          handleMatrixSizeChange={this.handleMatrixSizeChange}
          createSheet={this.createSheet}/>
        <MainTable matrix={this.state.matrix} onCellEdit={this.handleCellEdit}/>
        <ActionButtons 
          handleAddColumn={this.handleAddColumn}
          handleRemoveColumn={this.handleRemoveColumn}
          handleAddRow={this.handleAddRow}
          handleRemoveRow={this.handleRemoveRow}
        />
      </div>
    );
  }
}

export default App;
