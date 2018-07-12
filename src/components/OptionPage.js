import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="optionsWrapper">
        <span className="closeX">
          <Link to="/">X</Link>
        </span>

        <Link className="optionBox" to="/Shipments" style={{ fontSize: this.state.width / 1000 + 0.5 + 'em' }}>
          <div >Shipments</div>
        </Link>
        <Link className="optionBox" to="/Batches" style={{ fontSize: this.state.width / 1000 + 0.5 + 'em' }}>
          <div >Batches</div>
        </Link>
        <Link className="optionBox" to="/Pickups" style={{ fontSize: this.state.width / 1000 + 0.5 + 'em' }}>
          <div >Pickups</div>
        </Link>
        <Link className="optionBox" to="/Tracking" style={{ fontSize: this.state.width / 1000 + 0.5 + 'em' }}>
          <div >Tracking</div>
        </Link>
      </div>
    );
  }
}

export default OptionPage;
