import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Shipments extends Component {
  constructor() {
    super();
    this.state = {
      shipments: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/getShipments").then().then(response => {
      this.setState({ shipments: response.data })
      this.setState({ loading: false });
      console.log(response.data);
    })
  }

  render() {
    let temp = this.state.shipments;
    let results = temp.map((data, i) => {
      return (
        <tr>
          <td>{data.id}</td>
          <td>{data.mode}</td>
          <td>{data.tracking_code}</td>
          <td>{data.status}</td>
        </tr>
      )
    });
    return (
      <div>
        <Link to="/OptionPage"><button className="backButton">BACK</button></Link>
        <h1>SHIPMENTS</h1>
        <table className="responseTable">
          <th>SHIPMENT ID</th>
          <th>MODE</th>
          <th>TRACKING #</th>
          <th>STATUS</th>
          {
            results &&
            [results]
          }
        </table>
        <div>
          {this.state.loading && <h1>
            LOADING...
        </h1>}
        </div>
      </div>
    );
  }
}

export default Shipments;
