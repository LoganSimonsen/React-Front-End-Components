import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {RaisedButton} from 'material-ui';

class Shipments extends Component {
  constructor() {
    super();
    this.state = {
      shipments: [],
      loading: false,
      showTable: false,
      showForm: false,
      fromAddress: {
      street1: 'street1',
      street2: 'street2',
      city: 'city',
      state: 'state',
      zip: 'zip code'
      },
      toAddress: {
        street1: 'street1',
        street2: 'street2',
        city: 'city',
        state: 'state',
        zip: 'zip code'
        },
      parcel: {
        weight: 'Weight',
        length: 'Length',
        width: 'Width',
        height: 'Height',
        predefined: 'Predefined Parcel Type'
          },
    }
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTable = this.getTable.bind(this);
  }

  componentDidMount() {
    
  }
  getTable(){
    this.setState({ loading: true});
    axios.get("http://localhost:3001/getShipments").then().then(response => {
      this.setState({ shipments: response.data })
      this.setState({ loading: false });
      this.setState({showTable: true});
    })
  }
  showForm(e) {
    e.preventDefault;
    if (this.state.showForm) {
      this.setState({ showForm: false });
    } else {
      this.setState({ showForm: true });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
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
        <button className="shipmentButtons" onClick={this.getTable} >View Past Shipments</button>
        
        <table className="responseTable">
          <tbody>
          {this.state.showTable && <tr>
              <th>SHIPMENT ID</th>
              <th>MODE</th>
              <th>TRACKING #</th>
              <th>STATUS</th>
            </tr>}
            
              {results}
            
          </tbody>
        </table>
        
        <div>
          {this.state.loading && <h1>
            LOADING...
        </h1>}
        </div>
        <button className="shipmentButtons" onClick={this.showForm}>Create New Shipment</button>
        <br />
        <br />
        {this.state.showForm &&
          <div className="formsWrapper">
            <form onSubmit={this.handleSubmit}>
              <label>From Address:
              <br />
                <input className="inputLine" placeholder={this.state.fromAddress.street1} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.fromAddress.street2} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.fromAddress.city} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.fromAddress.state} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.fromAddress.zip} onChange={this.handleChange} />
              </label><br />
            </form>
            <form onSubmit={this.handleSubmit}>
              <label>To Address:
              <br />
                <input className="inputLine" placeholder={this.state.toAddress.street1} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.toAddress.street2} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.toAddress.city} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.toAddress.state} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.toAddress.zip} onChange={this.handleChange} />
              </label><br />
            </form>
            <form onSubmit={this.handleSubmit}>
              <label>Parcel:
              <br />
                <input className="inputLine" placeholder={this.state.parcel.weight} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.parcel.length} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.parcel.width} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.parcel.height} onChange={this.handleChange} />
              </label><br />
              <label>
                <br />
                <input className="inputLine" placeholder={this.state.parcel.predefined}onChange={this.handleChange} />
              </label><br />
            </form>
          </div>
        }
      </div>
    );
  }
}

export default Shipments;
