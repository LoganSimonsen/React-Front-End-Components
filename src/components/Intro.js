import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      value1: "10000px"
    }
    this.slider = this
      .slider
      .bind(this);
  }
  componentDidMount() {
    setTimeout(this.slider, 100);
  }

  slider() {
    this.setState({value1: "0px"});
  }

  render() {
    return (
      <div className="WelcomeWrap">
        <div
          className="Welcome"
          style={{
          marginRight: this.state.value1
        }}>
          <div className="WelcomeInner">
            <Link to='/OptionPage' className="std-button">
              <span>Login</span>
            </Link>
          </div>
          <div
            className="WelcomeInner"
            style={{
            borderRight: "transparent"
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
