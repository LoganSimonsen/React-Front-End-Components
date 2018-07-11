import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OptionPage extends Component {
  render() {
    return (
      <div className="optionsWrapper">
        <span className="closeX">
          <Link to="/">X</Link>
        </span>
        <div className="optionBox">
          <Link to="/">1</Link>
        </div>
        <div className="optionBox">
          <Link to="/">2</Link>
        </div>
        <div className="optionBox">
          <Link to="/">3</Link>
        </div>
        <div className="optionBox">
          <Link to="/">4</Link>
        </div>
      </div>
    );
  }
}

export default OptionPage;
