import React from 'react';
import Square from './Square';
import './style.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      xIsNext: true,
    };
  }
  renderSquare(i) {
    return (
      <Square value={this.state.square[i]} click={() => this.handleClick(i)} />
    );
  }

  handleClick(e) {
    let xIsNext = this.state.xIsNext;
    let Squares = this.state.square.slice();
    if (calculateWinner(Squares)) {
      return;
    }
    Squares[e] = xIsNext == true ? 'X' : 'O';
    this.setState({
      square: Squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    let winner = calculateWinner(this.state.square);
    let status;
    if (winner) {
      status = 'Winner was ' + winner;
    } else {
      status = 'Next player:' + (this.state.xIsNext == true ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
