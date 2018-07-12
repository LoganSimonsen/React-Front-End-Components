import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      value1: "10000px",
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.slider = this.slider.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    setTimeout(this.slider, 100);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  slider() {
    this.setState({ value1: "0px" });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="WelcomeWrap">
        <div
          className="Welcome"
          style={{
            marginRight: this.state.value1
          }}>
          <div className="WelcomeInner"
            style={{
              fontSize: this.state.width / 1000 + 0.5 + "em"
            }}>
            <Link to='/OptionPage' className="std-button">
              <span>Login</span>
            </Link>
          </div>
          <div
            className="WelcomeInner"
            style={{
              borderRight: "transparent",
              fontSize: this.state.width / 1000 + 0.5 + "em"
            }}>
            <Link to='/OptionPage' className="std-button">
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
