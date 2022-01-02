import React from 'react';
import './style.css';
export default class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.click();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
