import { Component } from "react";
import "../App.css";

class Locations extends Component {
    constructor(){
        super();
        this.state = {
            locationData: [],
            display: false,
            buttonText: false
        }
    }

    componentDidMount = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                locationData: data
            })
        })
    }

    handleLocationsDisplay = () => {
        this.setState({
            buttonText: !this.state.buttonText,
            display: !this.state.display
        })
    
    }

  render(){
    let locations = this.state.locationData.map(location => {
        return (
            <ul>
                <li>
                    Name: {location.name}
                    <br />
                    Climate: {location.climate}
                    <br />
                    Terrain: {location.terrain}
                </li>
            </ul>
        )
    })
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleLocationsDisplay}>{this.state.buttonText ? "Hide Locations" : "Show Locations"}</button>
        {this.state.display? locations: null}
      </div>
    );
  }
}

export default Locations;