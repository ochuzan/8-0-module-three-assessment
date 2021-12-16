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
            <li key={location.id}>
                Name: {location.name}
                <br />
                Climate: {location.climate}
                <br />
                Terrain: {location.terrain}
                <br />
            </li>
        )
    })
    return (
      <div className="locations">
        
        <h1>List of Locations</h1>
        
        <button onClick={this.handleLocationsDisplay}>{this.state.buttonText ? "Hide Locations" : "Show Locations"}</button>
        
        <ul>
            {this.state.display? locations: null}
        </ul>
      
      </div>
    );
  }
}

export default Locations;