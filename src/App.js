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
    result.push(new Array(columns).fill(1));
  }

  return result;
}


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      matrix: {}
    };
  }

  componentWillMount() {
    console.log(createSheetMatrix(6,7));
    const newMatrix = createSheetMatrix(6,7)
    const matrix = Object.assign({}, this.state.matrix, newMatrix);
    console.log([matrix]);
    this.setState({
      matrix: newMatrix
    });
  }

  render() {
    return (
      <div className="App">
        <MainTable matrix={this.state.matrix}/>
      </div>
    );
  }
}

export default App;
